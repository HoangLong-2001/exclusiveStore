import {
  Breadcrumb,
  Checkbox,
  Flex,
  Form,
  Input,
  Radio,
  Space,
  Tooltip,
} from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import priceFormat from "../../helpers/priceFormat";
import { useForm } from "antd/es/form/Form";
import "./Order.scss";
import momo from "./img/MoMo_Logo.png";
import money from "./img/cash-icon.png";
import { useEffect } from "react";
const breadcrumbItems = [
  {
    title: <Link to="/">Trang chủ</Link>,
  },
  {
    title: "Đặt hàng",
  },
];
export default function Order() {
  const cartItems = useSelector((state) => state.cartReducer);
  const [formInfo] = useForm();
  const [formPayment] = useForm();
  const total = cartItems.reduce((sum, item) => {
    const priceNew = item.info.price - item.info.price * item.info.discount;
    return sum + priceNew * item.quantity;
  }, 0);
  const handelPayment = () => {
    const orderInfo = {
      ...formInfo.getFieldValue(),
      ...formPayment.getFieldValue(),
    };
    console.log(orderInfo);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="order">
      <div className="order__breadcrumb">
        <Breadcrumb items={breadcrumbItems}></Breadcrumb>
      </div>
      <div className="order__title">Chi tiết đơn hàng</div>
      <div className="order__center">
        <div className="order__form">
          <Form form={formInfo} layout="vertical">
            <Form.Item name={"name"} label="Họ và tên" required>
              <Input required></Input>
            </Form.Item>
            <Form.Item name={"city"} label="Thành phố" required>
              <Input required></Input>
            </Form.Item>
            <Form.Item name={"district"} label="Quận" required>
              <Input required></Input>
            </Form.Item>
            <Form.Item name={"address"} label="Địa chỉ" required>
              <Input.TextArea required rows={4}></Input.TextArea>
            </Form.Item>
            <Form.Item name={"phoneNumber"} label="Số điện thoại" required>
              <Input required></Input>
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input></Input>
            </Form.Item>
            <Form.Item>
              <Flex justify="start">
                <Checkbox>Lưu lại thông tin cho lần đặt hàng sau</Checkbox>
              </Flex>
            </Form.Item>
          </Form>
        </div>
        <div className="order__detail">
          {cartItems.map((item) => (
            <div className="order__detail--info" key={item.cartId}>
              <figure>
                <img src={item.info?.images[0]} alt={item._id} />
                <Tooltip title={item.info?.title}>
                  <span>{item.info?.title}</span>
                </Tooltip>
              </figure>
              <span>
                {priceFormat(item.info?.discountPrice * item.quantity)}
              </span>
            </div>
          ))}
          <div className="order__total">
            <div className="order__total--subtotal">
              <span>Tổng tiền sản phẩm:</span> <span>{priceFormat(total)}</span>
            </div>
            <div className="order__total--shipping">
              <span>Phí vận chuyển:</span> <span>0</span>
            </div>
            <div className="order__total--total">
              <span>Tổng tiền: </span> <span>{priceFormat(total)}</span>
            </div>

            <Form className="order__payment-method" form={formPayment}>
              <Form.Item name={"payment_method"}>
                <Radio.Group defaultValue={"cash"} value={"cash"}>
                  <Space direction={"vertical"} size={32}>
                    <Radio name="wallets" value={"momo_wallet"}>
                      <Flex gap={10} align="center">
                        Ví Momo
                        <img src={momo} alt="momo" width={20} />
                      </Flex>
                    </Radio>
                    <Radio name="cash" value={"cash"}>
                      <Flex gap={10} align="center">
                        {" "}
                        Thanh toán khi nhận hàng
                        <img src={money} alt="money" width={26} />
                      </Flex>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Form>

            <div className="order__coupon">
              <input type="text" />
              <button>Thêm mã giảm giá</button>
            </div>
            <button className="order__btn" onClick={handelPayment}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
