import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { accountReducer } from "./account";
import { filterReducer } from "./filter";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import forgotReducer from "./forgotReducer";

const allReducers = combineReducers({
    loginReducer,
    accountReducer,
    filterReducer,
    cartReducer,
    wishlistReducer,
    forgotReducer
});
export default allReducers;
