import { Form, Row, Col, Input, notification, Modal, message } from "antd";
import {
  ClearOutlined,
  ExclamationCircleOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import "./EditProfile.scss";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../helpers/cookie";
import { updateACustomer } from "../../services/customerService";
import { update } from "../../actions/account";
import { passwordValidate } from "../../helpers/validate.js";
export default function EditProfile() {
  const [edit, setEdit] = useState(true);
  const [value] = useState("");
  const account = useSelector((state) => state.accountReducer);
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const onCancel = () => {
    setOpen(false);
  };
  const onOk = async () => {
    const inputForm = form.getFieldValue();

    Object.keys(inputForm).forEach((key) => {
      if (!inputForm[key]) {
        delete inputForm[key];
      }
    });
    console.log(inputForm);
    if (inputForm) {
      try {
        if (inputForm["new__password"] && inputForm["confirm__password"]) {
          if (
            !(inputForm["new__password"] === inputForm["confirm__password"])
          ) {
            throw new Error("Mật khẩu không khớp");
          } else if (!passwordValidate(inputForm["confirm__password"])) {
            throw new Error(
              "Mật khẩu không đúng định dạng. Mật khấu phải chứa ít nhất một chữ Hoa, một chữ số và ký tự đặc biệt"
            );
          }
        }
        delete inputForm["new__password"];
        const result = await updateACustomer(
          getCookie("accessToken"),
          inputForm
        );
        message.success("Bạn đã cập nhật thông tin thành công");
        dispatch(update(result));
      } catch (err) {
        console.log(err);

        notification.error({
          message: err instanceof Object ? err.message : err,
        });
      }
    }

    setOpen(false);
  };
  const handleSubmit = (info) => {
    let check = 0;
    for (let key in info) {
      if (info[key]) {
        check++;
      }
    }
    if (check) {
      modal.confirm({
        title: "Xác nhận",
        icon: <ExclamationCircleOutlined />,
        content: "Thông tin của bạn sẽ được cập nhật",
        okText: "Đồng ý",
        cancelText: "Hủy",
        open: open,
        onOk: onOk,
        onCancel: onCancel,
      });
      return;
    }
    modal.confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Vui lòng nhập vào thông tin cần thay đổi",
      okText: "Đồng ý",
      keyboard: true,
      open: open,
      onOk: onCancel,
      onCancel: onCancel,
    });
  };

  const handleEdit = () => {
    setEdit(false);
  };
  return (
    <>
      {contextHolder}
      <div className="form">
        <button className="form__edit" onClick={handleEdit}>
          Cập nhật tài khoản
        </button>
      {!account?.isPassword ? <p style={{color:'red'}}>Vui lòng thêm mật khẩu</p> : <></>}
        <Form
          form={form}
          className="form__edit"
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item name="name" label="Họ và tên">
            <Input
              className="form__input"
              value={value}
              allowClear={<ClearOutlined />}
              disabled={edit}
              placeholder={account.name}
            />
          </Form.Item>
          <Row gutter={50}>
            <Col span={12}>
              <Form.Item name="email" label="Email">
                <Input
                  className="form__input"
                  allowClear={<ClearOutlined />}
                  disabled={edit}
                  placeholder={account.email}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={"address"} label="Địa chỉ">
                <Input
                  className="form__input"
                  allowClear={<ClearOutlined />}
                  disabled={edit}
                  placeholder={account.address || ""}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="password" label="Cập nhật mật khẩu">
            <Input.Password
              type="password"
              className="form__input"
              placeholder="Mật khẩu hiện tại"
              allowClear={<ClearOutlined />}
              disabled={edit}
            />
          </Form.Item>
          <Form.Item name={"new__password"}>
            <Input.Password
              type="password"
              className="form__input"
              placeholder="Mật khẩu mới"
              allowClear={<ClearOutlined />}
              disabled={edit}
            />
          </Form.Item>
          <Form.Item name={"confirm__password"}>
            <Input.Password
              className="form__input"
              placeholder="Xác nhân mật khẩu mới"
              allowClear={<ClearOutlined />}
              disabled={edit}
            />
          </Form.Item>
          <div className="btn__group">
            <button
              type="button"
              disabled={edit}
              onClick={() => form.resetFields()}
            >
              Hủy
            </button>
            <button type="submit" disabled={edit}>
              Cập nhật
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
