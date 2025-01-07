import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../services/customerService";
import { addOTP } from "../../actions/forgot";

export default function Otp() {
  const data = useSelector((state) => state.forgotReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (value) => {
    try {
      const result = await verifyOtp({ email: data.email, otp: value.otp });
      console.log(result);
      if (result.success) {
        dispatch(addOTP(value.otp));
        navigate("/forgotPassword/newPassword");
      } else {
        message.warning({
          content: "Vui long nhập lai mã OTP",
        });
      }
    } catch (error) {
      message.warning({
        content: "Vui long nhập lai mã OTP",
      });
      console.log(error);
    }
  };
  return (
    <div div className="otp">
      <h3 className="otp__title">
        Vui lòng nhập vào mã otp đã được gửi tới email
      </h3>
      <Form className="otp__form" onFinish={handleSubmit}>
        <Form.Item name={"otp"}>
          <Input.OTP
            formatter={(str) => str.toUpperCase()}
            length={4}
            variant="filled"
            size="large"
          ></Input.OTP>
        </Form.Item>
        <Button type="primary" block size="large" htmlType="submit">
          Gửi
        </Button>
      </Form>
    </div>
  );
}
