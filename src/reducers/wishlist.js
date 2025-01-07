import { addToWishlist, deleteWishlistItem } from "../services/wishlistService";

export default function wishlistReducer(state = [], action) {
  let newState = [...state];
  console.log(newState, action.data);
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (newState.find((item) => item?._id === action.data._id)) {
        return state;
      } else {
        const productId = action.data._id;
        (async () => {
          try {
            const result = await addToWishlist({ productId });
            console.log(">>check wishlist:", result.data);
          } catch (error) {
            console.log(">>> check add to wishlist error:", error);
          }
        })();
        newState.push(action.data);

        return newState;
      }

    case "DELETE_ITEM_WISHLIST":
      newState = newState.filter((item) => item.product?._id !== action.id);
      (async () => {
        try {
          const result = deleteWishlistItem({ productId: action.id });
        } catch (error) {
          console.log(error);
        }
      })();
      return newState;
    case "FETCH_WISHLIST":
      console.log(action.data);

      return action.data;
    default:
      return state;
  }
}
