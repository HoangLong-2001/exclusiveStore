import { Breadcrumb } from "antd";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./MyAccount.scss";
import { useEffect } from "react";
import { get } from "../../actions/account";
import { getCookie } from "../../helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../../services/customerService";
export default function MyAccount() {
  const account = useSelector((state) => state.accountReducer);
  const dispatch = useDispatch();
  const items = [
    {
      title: <Link to="/">Trang chủ</Link>,
    },
    {
      title: "Tài khoản",
    },
  ];

  const navLinkActive = (e) => {
    return e.isActive ? "myAccount__choice--active" : "myAccount__choice";
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await getAccount(getCookie("accessToken"));
        return dispatch(get(result.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  },[account.name]);
  return (
    <section className="myAccount">
      <div className="myAccount__breadcrumb">
        <Breadcrumb items={items} />
        <h3 className="myAccount__welcome">
        Chào mừng! <span>{account.name || "..."}</span>
        </h3>
      </div>
      <div className="myAccount__details">
        <div className="myAccount__choices">
          <h1>
          Quản lý tài khoản</h1>
          <ul>
            <li>
              <NavLink className={navLinkActive} to="/private/info">
              Hồ sơ 
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={"/private/info/addressBook"}>Address Book</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>My Payment Options</NavLink>
            </li> */}
          </ul>

          <ul className="myAccount__orders">
            <h1>Đơn hàng</h1>
            <ul>
              {/* <li>
                <NavLink to={"/"}>Hàng hoàn trả</NavLink>
              </li> */}
              <li>
                <NavLink to={"/"}>Hàng đã hủy</NavLink>
              </li>
              <li><NavLink to={"/"}>Đơn hàng của tôi</NavLink></li>
            </ul>
          </ul>
          <ul className="myAccount__wishlist">
            <h1><Link to="/private/wishlist">Dang sách yêu thích</Link></h1>
          </ul>
        </div>
        <div className="myAccount__edit">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
