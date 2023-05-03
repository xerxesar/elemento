import request from "@/utils/request";

export function createUser(
  username,
  email,
  name,
  phoneNumber,
  password,
  complex,
  role
) {
  const data = {
    username,
    email,
    name,
    phoneNumber,
    password,
    complex,
    role,
  };
  return request({
    url: "/users",
    method: "post",
    data,
  });
}

export function getUsers() {
  return request({
    url: "/users/",
    method: "get",
  });
}

export function getUser(id) {
  return request({
    url: `/users/${id}`,
    method: "get",
  });
}

export function getCurrentUser() {
  return request({
    url: "/users/me",
    method: "get",
  });
}

export function changePassword(id, newPassword) {
  const data = {
    password: newPassword,
  };
  return request({
    url: `/users/${id}/updatePassword`,
    method: "post",
    data,
  });
}

export function deleteUser(id) {
  return request({
    url: `/users/${id}`,
    method: "delete",
  });
}

export function editUser(id, email, name, phoneNumber, password, role) {
  const data = {
    email,
    name,
    phoneNumber,
    password,
    role,
  };
  return request({
    url: `/users/${id}`,
    method: "patch",
    data,
  });
}
