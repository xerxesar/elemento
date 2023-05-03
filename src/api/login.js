import request from "@/utils/request";

export function loginByUsername(username, password) {
  return request({
    url: "/auth/login",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: {
      username: username,
      password: password,
    },
  });
}

export function refreshTokens() {
  return request({
    url: "/auth/refresh-tokens",
    method: "post",
  });
}

export function logout() {
  return request({
    url: "/auth/logout",
    method: "get",
  });
}
