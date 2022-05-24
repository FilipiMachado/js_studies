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
  createPost(data) {
    userDataList.posts.push({
      owner: data.owner,
      content: data.content,
    });
  },
};

userDataList.createPost({ owner: "filtroll", content: "My second post" });
console.log(userDataList.posts)

const form = document.getElementById("form");
const formInput = document.getElementById("post-input");
const postList = document.getElementById("post-list");

form.addEventListener("submit", function createPostController(e) {
  e.preventDefault();
  //console.log('Creating a new post')
  //console.log(formInput.value)

  postList.insertAdjacentHTML("afterbegin", `<li>${formInput.value}</li>`);
  formInput.value = "";
});
