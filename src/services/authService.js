import { post } from "../utils/request";
import { postAuth } from "../utils/requestAuth";
export const register = async (fullName, email, password) => {
  const result = await post("customer", {
    name: fullName,
    email,
    password,
  });
  console.log(">>> check register:", result);

  return result;
};
export const login = async (email, password, type) => {
  const result = await post("auth/login", {
    email,
    password,
    type,
  });
  return result;
};
export const refreshToken = async (token) => {
  const result = await post("auth/refreshToken", {
    refreshToken: token,
  });
  return result;
};
export const logOut = async (token) => {
  const result = await postAuth("auth/logout", {}, token);
  return result;
};
