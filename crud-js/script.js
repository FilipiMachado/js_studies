// CRUD Tests

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

// CREATE
function createPost(data) {
  userDataList.posts.push({
    owner: data.owner,
    content: data.content,
  });
}

createPost({ owner: "filbr", content: "My second post" });

console.log(userDataList.posts);
