import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getToken } from "../../helpers/getToken";
import { delete_cookie, getCookie, setCookie } from "../../helpers/cookie";
import { refreshToken } from "../../services/authService";
import { setLogin, setLogOut } from "../../actions/login";
import { FloatButton } from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import { getCart } from "../../services/cartService";
import { fetchCart } from "../../actions/cart";
export default function LayoutDefault() {
  useSelector((state) => state.loginReducer);
  useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    (() => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    })();
    if (!getCookie("accessToken")) {
      (async () => {
        try {
          const result = await refreshToken(getCookie("refreshToken"));
          setCookie("accessToken", result.tokens.accessToken, 1 / 24);
          setCookie("refreshToken", result.tokens.refreshToken, 30);
          dispatch(setLogin());
        } catch (err) {
          delete_cookie("accessToken");
          delete_cookie("refreshToken");
          dispatch(setLogOut());
        }
      })();
      return;
    }
    if (getCookie("refreshToken")) {
      getToken(dispatch);
    }
    (async () => {
      try {
        const result = await getCart();
        console.log("check cart data:", result.data);
        dispatch(fetchCart(result.data));
      } catch (error) {
        console.log(">>> Check cart's error:", error);
        dispatch(fetchCart([]));
      }
    })();
  }, [getCookie("accessToken")]);
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      {scrollPosition > 200 ? (
        <FloatButton
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          icon={<ToTopOutlined />}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
