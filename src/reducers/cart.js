import {
  addToCartService,
  deleteAllService,
  deleteCartService,
  updateCartService,
} from "../services/cartService";

const cartReducer = (state = [], action) => {
  let newState = [...state];
  let cartData;
  switch (action.type) {
    case "ADD_TO_CART":
      cartData = {
        _id: action._id,
        info: action.info,
        quantity: action.quantity,
        color: action.color,
        size: action.size,
      };
      (async () => {
        try {
          const result = await addToCartService(cartData);
          console.log(">>>Check add to cart:", result);
        } catch (error) {
          console.log(">>> check add to cart error:", error);
        }
      })();
      return [...state, cartData];
    case "UPDATE_QUANTITY":
      const itemUpdate = newState.find((item) => item._id === action._id);
      itemUpdate.quantity = itemUpdate.quantity + action.quantity;
      cartData = {
        cartId: itemUpdate._id,
        productId: itemUpdate.info._id,
        quantity: itemUpdate.quantity,
      };

      (async () => {
        try {
          await updateCartService(cartData);
        } catch (error) {
          console.log(">>> check add to cart update error:", error);
        }
      })();
      return newState;

    case "DELETE_ITEM":
      const deleteItem = newState.find((item) => item._id === action._id);
      newState = newState.filter((item) => item._id !== action._id);
      (async () => {
        try {
          await deleteCartService(action._id, deleteItem);
        } catch (error) {
          console.log(">>check delete error", error);
        }
      })();
      return newState;
    case "DELETE_ALL":
      (async () => {
        try {
          await deleteAllService();
        } catch (error) {
          console.log(">>check delete error", error);
        }
      })();
      return [];
    case "FETCH":
      return action.data;
  }
  return state;
};
export default cartReducer;
