import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getComments() {
  //get all posts
  return [...comments];
}

export function getCommentById(id) {
  //get comment by id
  return comments.find((comments) => comments.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.find((comments) => comments.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comments) => {
    if (comments.id === id) {
      return {
        ...comments, // name age email prop1 prop2 prop3
        ...body, // email prop1
      };
    }

    return comments;
  });
}

export function deleteCommentById(id) {
  //delete comment by id
  comments = comments.filter((post) => comments.id !== id);
  return comments;
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  return comments.push(comment);
}
