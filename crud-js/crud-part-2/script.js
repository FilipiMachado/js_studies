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
      id: Date.now(),
      owner: "filbr",
      content: "My first post",
    },
  ],
  loadPosts: function () {
    userDataList.posts.forEach(({ id, owner, content }) => {
      userDataList.createPost({ id: id, owner: owner, content: content }, true);
    });
  },
  createPost: function (data, htmlOnly = false) {
    const internalId = Date.now();
    if (!htmlOnly) {
      userDataList.posts.push({
        id: data.id || internalId,
        owner: data.owner,
        content: data.content,
      });
    }
    postList.insertAdjacentHTML(
      "afterbegin",
      `
      <li data-id="${internalId}">
        ${data.content}
        <button style="cursor: pointer" class="fas fa-trash btn-delete"></button>
      </li>
    `
    );
    postInput.value = "";
  },
  deletePost: function (id) {
    const updatedPostList = userDataList.posts.filter((post) => {
      return post.id !== Number(id);
    });
    userDataList.posts = updatedPostList;
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
  const isBtnDeleteClick = actualElement.classList.contains("btn-delete");
  if (isBtnDeleteClick) {
    const id = actualElement.parentNode.getAttribute("data-id");

    // Manipulate the server side/database/file/source
    userDataList.deletePost({ id });

    //Manipulate the View/Output
    actualElement.parentNode.remove();
  }
});
