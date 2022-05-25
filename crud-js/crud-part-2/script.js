const myForm = document.getElementById("form");
const postInput = document.getElementById("post-input");
const postList = document.getElementById("post-list");

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
  loadPosts: function () {
    userDataList.posts.forEach(({ owner, content }) => {
      userDataList.createPost({ owner: owner, content: content }, true);
    });
  },
  createPost: function (data, htmlOnly = false) {
    if (!htmlOnly) {
      userDataList.posts.push({
        id: userDataList.posts.length + 1,
        owner: data.owner,
        content: data.content,
      });
    }

    postList.insertAdjacentHTML("afterbegin", `<li>${data.content}</li>`);
    postInput.value = "";
  },
};

// READ
userDataList.loadPosts()

// CREATE
myForm.addEventListener("submit", function createPostController(e) {
  e.preventDefault();

  userDataList.createPost({ owner: "filbr", content: postInput.value });
});
