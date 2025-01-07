import { getCookie } from "../helpers/cookie";
import { delAuth, getAuth, postAuth } from "../utils/requestAuth";

export const addToWishlist = async (data) => {
  const result = await postAuth(
    "wishlist",
    data ,
    getCookie("accessToken")
  );
  return result;
};
export const getAllWishlist  = async()=>{
  const result = await getAuth("wishlist",getCookie('accessToken'))
  return result
}
export const deleteWishlistItem = async(data)=>{
  const result = await delAuth("wishlist",data,getCookie('accessToken'))
  return result
}