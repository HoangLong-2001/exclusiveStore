const API_PATH = "http://localhost:8080/";
export async function getAuth(path, token) {
  const response = await fetch(`${API_PATH}${path}`, {
    headers: {
      authorization: `bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}
export async function putAuth(path, token, option={}) {
  const response = await fetch(`${API_PATH}${path}`, {
    method: "put",
    headers: {
      authorization: `bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}
export async function postAuth(path, option, token) {
  const response = await fetch(`${API_PATH}${path}`, {
    method: "post",
    headers: {
      authorization: `bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(option),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}
export async function delAuth(path, option={}, token) {
  const response = await fetch(`${API_PATH}${path}`, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}