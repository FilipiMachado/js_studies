// CRUD Tests

const userDataList = {
  users: [
    {
      username: "filbr",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "filbr",
      content: "My first post",
    },
  ],
};

// CREATE
function createPost(data) {
  userDataList.posts.push({
    id: userDataList.posts.length + 1,
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

// UPDATE
function updatePostContent(id, newContent) {
  const updatedPost = getPosts().find((post) => {
    return post.id === id;
  });
  updatedPost.content = newContent;
}

updatePostContent(1, "New post content");
console.log(userDataList.posts);

// DELETE
function deletePost(id) {
  const updatedPostList = getPosts().filter((post) => {
    return post.id !== id;
  });
  userDataList.posts = updatedPostList
}

deletePost(2);
deletePost(3);
console.log(getPosts())
