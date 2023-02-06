import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...posts];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.find((posts) => posts.userId === userId);
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((posts) => posts.id === id);
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  posts.unshift(post);
}

export function updatePostTitle(id, title) {
  //update post title
  posts = posts.map((posts) => {
    if (posts.id === id) {
      return {
        ...posts, // name age email prop1 prop2 prop3
        ...title, // email prop1
      };
    }

    return posts;
  });
}

export function updatePostBody(id, body) {
  //update post body
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
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  posts = posts.map((posts) => {
    if (posts.id === id) {
      return {
        ...posts, // name age email prop1 prop2 prop3
        ...post, // email prop1
      };
    }

    return posts;
  });
}

export function deletePostBy(id) {
  //delete post by id
  posts = posts.filter((post) => post.id !== id);
  return posts;
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  posts = posts.filter((post) => post.userId !== userId);
  return posts;
}
