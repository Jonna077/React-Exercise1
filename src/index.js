//Call all functions inside services and log updated value/s
import * as allUser from "./services/users";
import * as allPosts from "./services/posts";
import { generateId } from "./utils";
import * as allComments from "./services/comments";
import { posts } from "./data/posts";
import { users } from "./data/users";
import { comments } from "./data/comments";

//user
console.log(allUser.getAllUsers());

allUser.getUserById(1);

allUser.addUser({
  id: generateId(users),
  name: "Jonna Mae Mayang",
  username: "Jonna077",
  email: "jmayang@77global.biz",
  address: {
    street: "Camias",
    suite: "#004",
    city: "Manila",
    zipcode: "1012",
    geo: {
      lat: "-7852.2310",
      lng: "89521.0325",
    },
  },
  phone: "0946 085 0110",
  website: "jonna_mayang.org",
  company: {
    name: "77GSI_Jonna",
    catchPhrase: "Always be Positive",
    bs: "Always be Proud for what are you accomplish",
  },
});

//posts
console.log(allPosts.getPosts());

allPosts.getPostById(1);
allPosts.getPostsByUser(2);
allPosts.updatePostTitle(2, { title: "Hello" });
allPosts.updatePostBody(2, { body: "Novel" });
allPosts.updatePost(3, { body: "Magazinel" });

allPosts.addPost({
  userId: generateId(posts),
  id: generateId(posts),
  title: "Noli Me Tangere",
  body: "Filipino Novel ",
});

console.log(allComments.getComments());

allComments.getCommentById(1);
allComments.getCommentsByPostId(2);
allComments.getComments(3);
allComments.updateCommentBody(4, { body: "Social Media Comments" });
allComments.deleteCommentById(5);

allComments.addComment({
  postId: generateId(comments),
  id: generateId(comments),
  name: "id Jonna Mae Mayang",
  email: "jmayang@77global.biz",
  body: "Full Stack Developer",
});
