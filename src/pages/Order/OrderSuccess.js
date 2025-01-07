import { Link } from "react-router-dom";
import success from "./img/success.png";
import { useEffect } from "react";
export default function OrderSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="order-success">
      <img src={success} alt="success" />
      Bạn đã đặt hàng thành công!
      <Link to="/">Tiếp tục mua sắm</Link>
    </div>
  );
}
