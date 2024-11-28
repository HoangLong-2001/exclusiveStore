import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { accountReducer } from "./account";
import { filterReducer } from "./filter";
import cartReducer from "./cart";

const allReducers = combineReducers({
    loginReducer,
    accountReducer,
    filterReducer,
    cartReducer
});
export default allReducers;
