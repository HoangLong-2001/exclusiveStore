import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../actions/cart";
import priceFormat from "../../helpers/priceFormat";
import { useEffect } from "react";
export default function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => {
    const priceNew = item.info.price - item.info.price * item.info.discount;
    return sum + priceNew * item.quantity;
  }, 0);
  const items = [
    {
      title: <Link to="/">Trang trủ</Link>,
    },
    {
      title: `Giỏ hàng`,
    },
  ];
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="cart">
      <div className="cart__breadcrumb">
        <Breadcrumb items={items} />
      </div>
      <table className="cart__table">
        <thead className="cart__header">
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng </th>
            <th>Tổng tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="cart__list">
          {cart.length > 0 &&
            cart.map((item, index) => (
              <tr className="cart__item" key={index}>
                <CartItem item={item} />
              </tr>
            ))}
        </tbody>
      </table>
      <button className="cart__btn" onClick={handleDeleteAll}>
        Xóa toàn bộ
      </button>

      <div className="cart__payment">
        <div className="cart__coupon">
          <div className="cart__codeInput">
            <input type="text" placeholder="Mã giảm giá của bạn" />
          </div>
          <button className="cart__applyCoupon">Áp dụng</button>
        </div>
        <div className="cart__total">
          <h1 className="cart__total--title">Tổng Cộng</h1>
          <p className="cart__total--detail">
            <span>Tổng giá sản phẩm:</span>
            <span>{priceFormat(total)}</span>
          </p>
          <p className="cart__total--detail">
            <span>Giao hàng:</span>
            <span>Free</span>
          </p>
          <p className="cart__total--detail">
            <span>Tổng:</span>
            <span>{priceFormat(total)}</span>
          </p>
          {cart.length ? (
            <Link className="cart__total--btn" to={"/private/order"}>
              Thanh Toán
            </Link>
          ) : (
            <Link className="cart__total--btn">Thanh Toán</Link>
          )}
        </div>
      </div>
    </section>
  );
}
