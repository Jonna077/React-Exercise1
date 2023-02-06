import { comments } from "../data/comments";
import { users as data } from "../data/users";

//private
let users = [...data];

export function getAllUsers() {
  //
  return [...users];
}

export function getUserById(id) {
  //d
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  //
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}

export function addUser(userInfo) {
  //
  return users.push(userInfo);
}
