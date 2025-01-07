import {
  Breadcrumb,
  Flex,
  Form,
  Input,
  message,
  Modal,
  Radio,
  Space,
  Tooltip,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import priceFormat from "../../helpers/priceFormat";
import { useForm } from "antd/es/form/Form";
import "./Order.scss";
import vnpay from "./img/vnp.svg";
import money from "./img/cash-icon.png";
import { useEffect } from "react";
import { orderPayment } from "../../services/orderService";
import { deleteAll } from "../../actions/cart";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => {
    const priceNew = item.info.price - item.info.price * item.info.discount;
    return sum + priceNew * item.quantity;
  }, 0);
  const handelPayment = async () => {
    const info = formInfo.getFieldsValue();
    const checkInfo = Object.keys(info)
      .filter((key) => key !== "email")
      .some((key) => !info[key]);
    const payment = formPayment.getFieldsValue();

    if (checkInfo)
      return message.warning("Vui lòng điền đầy đủ thông tin đơn hàng");

    if (!payment.payment_method)
      return message.warning("Vui lòng chọ phương thức thanh toán");
    const orderInfo = {
      ...{
        name:info.name,
        address: info.address + "," + info.district + "," + info.city,
        phoneNumber: info.phoneNumber,
        email:info.email||null
      },
      ...formPayment.getFieldsValue(),
    };
    try {
      const result = await orderPayment(orderInfo);
      if (result.message === "success") {
        navigate('/success')
        dispatch(deleteAll())
        }
        else if(result.message === "redirect"){
          window.location.replace(result.url);
        
      }
    } catch (error) {
      console.log(error);
      Modal.error({
        title: "Thông báo",
        content:
          "Đặt hàng không thành công, Vui lòng kiểm tra lại thông tin đơn hàng",
      });
    }
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
              <Input size="large" required></Input>
            </Form.Item>
            <Form.Item name={"city"} label="Thành phố" required>
              <Input size="large" required></Input>
            </Form.Item>
            <Form.Item name={"district"} label="Quận" required>
              <Input size="large" required></Input>
            </Form.Item>
            <Form.Item name={"address"} label="Địa chỉ" required>
              <Input.TextArea size="large" required rows={4}></Input.TextArea>
            </Form.Item>
            <Form.Item name={"phoneNumber"} label="Số điện thoại" required>
              <Input size="large" required></Input>
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input size="large"></Input>
            </Form.Item>
            {/* <Form.Item>
              <Flex justify="start">
                <Checkbox>Lưu lại thông tin cho lần đặt hàng sau</Checkbox>
              </Flex>
            </Form.Item> */}
          </Form>
        </div>
        <div className="order__detail">
          {cartItems.map((item) => (
            <div className="order__detail--info" key={item.cartId}>
              <figure>
                <img src={item.info?.images[0]} alt={item._id} />
                <Tooltip title={item.info?.title+" ("+item.color+"/"+item.size+")"}>
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
                <Radio.Group>
                  <Space direction={"vertical"} size={32}>
                    <Radio name="wallets" value={"vnpay"}>
                      <Flex gap={10} align="center">
                        Ví VNPAY
                        <img src={vnpay} alt="vnpay" width={80} />
                      </Flex>
                    </Radio>
                    <Radio name="cash" value={"cash"}>
                      <Flex gap={10} align="center">
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
