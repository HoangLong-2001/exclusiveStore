import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { passwordValidate } from "../../helpers/validate";
import { changePassword } from "../../services/customerService";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export default function NewPassword() {
  const data = useSelector((state) => state.forgotReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    const { new_password, confirm_password } = value;
    if (new_password !== confirm_password)
      return message.error("Mật khẩu không khớp");
    else if (!passwordValidate(new_password))
      return message.error(
        "Mật khẩu không đúng định dạng (Mật khẩu phải chứa ít nhất 1 chư hoa, 1 chữ in thường, 1 kí tự đặc biệt và 1 số. Mật khẩu phải chứa ít nhất 8 kí tư.)"
      );
    try {
      const result = await changePassword({ ...data, password: new_password ,type:'customer'});
      console.log(result);
      if (result.success) {
        message.success("Cập nhật mật khẩu thành công");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      message.error("Cập nhật mật khẩu không thành công");
    }
  };
  return (
    <div className="password">
      <h3 className="password__title">Vui lòng nhập vào mật khẩu của bạn!</h3>
      <Form
        className="password__form"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item name={"new_password"} label="Mật khẩu mới" required>
          <Input.Password size="large" required></Input.Password>
        </Form.Item>
        <Form.Item name={"confirm_password"} label="Xác nhận mật khẩu" required>
          <Input.Password  size="large" required></Input.Password>
        </Form.Item>
        <Button type="primary" block size="large" htmlType="submit">
          Gửi
        </Button>
      </Form>
    </div>
  );
}
