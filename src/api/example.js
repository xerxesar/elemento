import request from "@/utils/request";

export function createEntity(prop1, prop2) {
  const data = {
    prop1,
    prop2,
  };
  return request({
    url: "/entity",
    method: "post",
    data,
  });
}

export function getEntities() {
  return request({
    url: "/entity/",
    method: "get",
  });
}

export function getEntity(id) {
  return request({
    url: `/entity/${id}`,
    method: "get",
  });
}

export function deleteEntity(id) {
  return request({
    url: `/entity/${id}`,
    method: "delete",
  });
}

export function editEntity(id, prop1, prop2) {
  const data = {
    prop1,
    prop2,
  };
  return request({
    url: `/entity/${id}`,
    method: "patch",
    data,
  });
}
