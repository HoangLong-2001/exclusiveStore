import { post } from "../utils/request";
import { postAuth } from "../utils/requestAuth";
export const register = async (fullName, email, password) => {
  const result = await post("auth/customer/register", {
    name: fullName,
    email,
    password,
  });
  console.log(">>> check register:", result);

  return result;
};
export const login = async (email, password) => {
  const result = await post("auth/customer/login", {
    email,
    password,
  });
  return result;
};
export const refreshToken = async (token) => {
  const result = await post("auth/customer/refresh-token", {
    refreshToken: token,
  });
  return result;
};
export const logOut = async (token) => {
  const result = await postAuth("auth/customer/logout", {}, token);
  return result;
};
