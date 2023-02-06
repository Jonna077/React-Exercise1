import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getComments() {
  //
  return [...comments];
}

export function getCommentById(id) {
  //
  return comments.find((comments) => comments.id === id);
}

export function getCommentsByPostId(postId) {
  //
  return comments.find((comments) => comments.postId === postId);
}

export function updateCommentBody(id, body) {
  //
  comments = comments.map((comments) => {
    if (comments.id === id) {
      return {
        ...comments,
        ...body,
      };
    }

    return comments;
  });
}

export function deleteCommentById(id) {
  //
  comments = comments.filter((post) => comments.id !== id);
  return comments;
}

export function addComment(comment) {
  //
  return comments.push(comment);
}
