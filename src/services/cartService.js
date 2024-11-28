import { delAuth, getAuth, postAuth, putAuth } from "../utils/requestAuth";
import { getCookie } from "../helpers/cookie";
export const getCart = async () => {
  const result = await getAuth("cart", getCookie("accessToken"));
  return result;
};
export const addToCartService = async (data) => {
  const result = await postAuth(
    "cart",
    data,
    getCookie("accessToken")
  );
  return result;
};
export const updateCartService = async (data) => {
  const result = await putAuth("cart", getCookie("accessToken"), data);
  return result;
};
export const deleteCartService = async (id,data) => {
  const result = await delAuth(`cart/${id}`, data, getCookie("accessToken"));
  return result;
};
export const deleteAllService = async()=>{
    const result = await delAuth("cart",[1], getCookie("accessToken"));
    return result;
}