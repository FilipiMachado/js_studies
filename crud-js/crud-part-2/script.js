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
    const id = userDataList.posts.length
    if (!htmlOnly) {
      userDataList.posts.push({
        id: userDataList.posts.length + 1,
        owner: data.owner,
        content: data.content,
      });
    }
    postList.insertAdjacentHTML(
      "afterbegin",
      `
      <li data-id="${id}">
        ${data.content}
        <button style="cursor: pointer" class="fas fa-trash btn-delete"></button>
      </li>
    `
    );
    postInput.value = "";
  },
  deletePost: function () {

  },
};

// READ
userDataList.loadPosts();

// CREATE
myForm.addEventListener("submit", function createPostController(e) {
  e.preventDefault();

  userDataList.createPost({ owner: "filbr", content: postInput.value });
});

// DELETE
postList.addEventListener("click", function deletePost(e) {
  const actualElement = e.target;
  const isBtnDeleteClick = actualElement.classList.contains('btn-delete')
  if (isBtnDeleteClick) {
    const id = actualElement.parentNode.getAttribute('data-id')
    userDataList.deletePost({ id })
    actualElement.parentNode.remove();
  }
});
