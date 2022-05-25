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
};

function createPost(data) {
  userDataList.posts({
    id: userDataList.posts.length + 1,
    owner: data.owner,
    content: data.content,
  });
}

const myForm = document.getElementById("form");
const postInput = document.getElementById("post-input");
const postList = document.getElementById("post-list");

myForm.addEventListener("submit", function createPostController(e) {
  e.preventDefault();

  postList.insertAdjacentHTML("afterbegin", `<li>${postInput.value}</li>`);
  postInput.value = "";
});
