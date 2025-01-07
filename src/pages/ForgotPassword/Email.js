import { Button, Form, Input, message } from "antd";
import { sendEmail } from "../../services/customerService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../../actions/forgot";

export default function Email() {
  useSelector((state) => state.forgotReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    try {
      const result = await sendEmail(value);
      console.log(result);
      if (result.success) {
        dispatch(addEmail(value.email));
        navigate("/forgotPassword/otp");
      } else {
        message.warning({
          content: "Vui long nhập lai email",
        });
      }
    } catch (error) {
      message.warning({
        content: "Vui long nhập lai email",
      });
      console.log(error);
    }
  };
  return (
    <div className="email">
      <h3 className="email__title">Vui lòng nhập vào email của bạn!</h3>
      <Form className="email__form" layout="vertical" onFinish={handleSubmit}>
        <Form.Item name={"email"} label="Email" required>
          <Input size="large" required></Input>
        </Form.Item>
        <Button type="primary" block size="large" htmlType="submit">
          Gửi
        </Button>
      </Form>
    </div>
  );
}
