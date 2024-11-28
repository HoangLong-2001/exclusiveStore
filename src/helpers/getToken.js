import { setLogin, setLogOut } from "../actions/login";
import { refreshToken } from "../services/authService";
import { delete_cookie, getCookie, setCookie } from "./cookie";

export const getToken = (dispatch) => {
  const inter = setInterval(async () => {
    try {
      if (!getCookie("refreshToken")) return clearInterval(inter);
      const result = await refreshToken(getCookie("refreshToken"));
      setCookie("accessToken", result.tokens.accessToken, 1 / 24);
      setCookie("refreshToken", result.tokens.refreshToken, 30);
      dispatch(setLogin());
      window.location.reload();
    } catch (err) {
      delete_cookie("accessToken");
      delete_cookie("refreshToken");
      dispatch(setLogOut());
      window.location.reload();
    }
  }, 60 * 60 * 1000);
};
