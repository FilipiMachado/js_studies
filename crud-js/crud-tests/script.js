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

createPost({ owner: "brtroll", content: "My second post" });
createPost({ owner: "zuerinho", content: "Third post now" });

// READ
function getPosts() {
  return userDataList.posts;
}

console.log(getPosts());

// UPDATE

// DELETE
