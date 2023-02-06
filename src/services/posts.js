import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  //
  return [...posts];
}

export function getPostsByUser(userId) {
  //
  return posts.find((posts) => posts.userId === userId);
}

export function getPostById(id) {
  //
  return posts.find((posts) => posts.id === id);
}

export function addPost(post) {
  //
  posts.unshift(post);
}

export function updatePostTitle(id, title) {
  //
  posts = posts.map((posts) => {
    if (posts.id === id) {
      return {
        ...posts,
        ...title,
      };
    }

    return posts;
  });
}

export function updatePostBody(id, body) {
  //
  posts = posts.map((posts) => {
    if (posts.id === id) {
      return {
        ...posts, // name age email prop1 prop2 prop3
        ...body, // email prop1
      };
    }

    return posts;
  });
}

export function updatePost(id, post) {
  //
  posts = posts.map((posts) => {
    if (posts.id === id) {
      return {
        ...posts,
        ...post,
      };
    }

    return posts;
  });
}

export function deletePostBy(id) {
  //
  posts = posts.filter((post) => post.id !== id);
  return posts;
}

export function deletePostsByUserId(userId) {
  //
  posts = posts.filter((post) => post.userId !== userId);
  return posts;
}
