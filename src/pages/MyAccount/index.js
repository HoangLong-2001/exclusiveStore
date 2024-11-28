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
      title: <Link to="/">Home</Link>,
    },
    {
      title: "My Account",
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
          Welcome! <span>{account.name || "..."}</span>
        </h3>
      </div>
      <div className="myAccount__details">
        <div className="myAccount__choices">
          <h1>Manage My Account</h1>
          <ul>
            <li>
              <NavLink className={navLinkActive} to="/private/info">
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/private/info/addressBook"}>Address Book</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>My Payment Options</NavLink>
            </li>
          </ul>

          <ul className="myAccount__orders">
            <h1>My Orders</h1>
            <ul>
              <li>
                <NavLink to={"/"}>My Returns</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>My Cancellations</NavLink>
              </li>
            </ul>
          </ul>
          <ul className="myAccount__wishlist">
            <h1>My WishList</h1>
          </ul>
        </div>
        <div className="myAccount__edit">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
