import { Badge, Dropdown } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logo.svg";
import searchLogo from "./img/searchLogo.svg";
import wishlist from "./img/Wishlist.svg";
import cart from "./img/Cart1.svg";
import "./Header.scss";
import { delete_cookie, getCookie } from "../../helpers/cookie";
import { UserOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../actions/login";
import { logOut } from "../../services/authService";
import { addFilter, resetFilter } from "../../actions/filter";

export default function Header() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartReducer);
  useSelector((state) => state.paramsReducer);
  const navigate = useNavigate();
  const total = cartList.reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  const handleLogout = async () => {
    try {
      await logOut(getCookie("accessToken"));
      delete_cookie("accessToken");
      delete_cookie("refreshToken");
      dispatch(setLogOut());
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to={"/private/info"}>Manage My Account</Link>,
    },
    {
      key: "2",
      onClick: handleLogout,
      icon: <LogoutOutlined />,
      label: <span>Logout</span>,
    },
  ];
  const navLinkActive = (e) => {
    return e.isActive ? "header__link--active" : "header__link";
  };
  const token = getCookie("accessToken");
  return (
    <>
      <div className="top">
        <p className="top__desc">Gọi đặt mua 1900.xxx (8:00 - 22:00)</p>
      </div>
      <header className="header">
        <div className="main__content">
          <div className="header__body">
            <div className="header__bottom">
              <Link className="header__logo" to={"/"}>
                <img src={logo} alt="pageLogo" />
              </Link>
              <nav className="header__nav">
                <ul>
                  <li>
                    <NavLink to="/" className={navLinkActive}>
                      Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkActive}>
                      Liên hệ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkActive}>
                      Thông tin
                    </NavLink>
                  </li>
                  <li>
                    {!token && (
                      <NavLink to="/register" className={navLinkActive}>
                        Đăng ký
                      </NavLink>
                    )}
                  </li>
                </ul>
              </nav>
              <div className="header__bottom--right">
                <div className="header__search">
                  <input type="text" />
                  <img
                    src={searchLogo}
                    alt="searchLogo"
                    className="header__search--logo"
                  />
                </div>
                {token ? (
                  <>
                    <Link className="header__wishlist" to={"/"}>
                      <img src={wishlist} alt="wishlist" />
                    </Link>
                    <Link to={"/private/cart"}>
                      <Badge count={total}>
                        <img src={cart} alt="cart" />
                      </Badge>
                    </Link>
                    <Dropdown menu={{ items }}>
                      <div className="header__account">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <rect width="32" height="32" rx="16" fill="" />
                          <path
                            d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <Link className="header__login" to="/login">
                      <LoginOutlined />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
