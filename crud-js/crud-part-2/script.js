const userDataList = {
  users: [
    {
      username: "filbr",
    },
  ],
  posts: [
    {
      owner: "filbr",
      content: "My first post",
    },
  ],
  createPost(data, htmlOnly = false) {
    if (!htmlOnly) {
      userDataList.posts.push({
        owner: data.owner,
        content: data.content,
      });
    }

    const postList = document.getElementById("post-list");
    postList.insertAdjacentHTML("afterbegin", `<li>${data.content}</li>`);
  },
};

userDataList.posts.forEach(({ owner, content }) => {
  userDataList.createPost({ owner: owner, content: content }, true);
});

const form = document.getElementById("form");
const formInput = document.getElementById("post-input");

form.addEventListener("submit", function createPostController(e) {
  e.preventDefault();
  userDataList.createPost({ owner: "filtroll", content: formInput.value });
  formInput.value = "";
  //console.log('Creating a new post')
  //console.log(formInput.value)
});

console.log(userDataList.posts)