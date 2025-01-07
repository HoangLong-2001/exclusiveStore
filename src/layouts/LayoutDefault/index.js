import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { delete_cookie} from "../../helpers/cookie";
// import { refreshToken } from "../../services/authService";
// import { setLogin, setLogOut } from "../../actions/login";
import { FloatButton } from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import { getCart } from "../../services/cartService";
import { fetchCart } from "../../actions/cart";
import { getAllWishlist } from "../../services/wishlistService";
import { fetchWishlist } from "../../actions/wishlist";
import { useToken } from "../../hooks/useToken";
export default function LayoutDefault() {
  useSelector((state) => state.cartReducer);
  const wishList = useSelector((state) => state.wishlistReducer);
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
    delete_cookie("filter");
  }, []);
  useToken();
  useEffect(() => {
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
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const result = await getAllWishlist();
        dispatch(fetchWishlist(result.data));
      } catch (error) {
        console.log(error);
        dispatch(fetchWishlist([]));
      }
    })();
  }, [wishList.length]);
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
