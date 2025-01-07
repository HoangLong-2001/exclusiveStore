export const addToWishlist = (data) => {
  return {
    type: "ADD_TO_WISHLIST",
    data,
  };
};
export const deleteItem = (id)=>{
    return {
        type:"DELETE_ITEM_WISHLIST",
        id
    }
}
export const fetchWishlist = (data)=>{
  return {
    type:"FETCH_WISHLIST",
    data
  }
}