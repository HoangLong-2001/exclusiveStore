import { Form, Row, Col, Input, notification, Modal } from "antd";
import { ClearOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import "./EditProfile.scss";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../helpers/cookie";
import { updateACustomer } from "../../services/customerService";
import { update } from "../../actions/account";
import { passwordValidate } from "../../helpers/validate.js";
export default function EditProfile() {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [edit, setEdit] = useState(true);
  const inputRef = useRef();
  const [value] = useState("");
  const account = useSelector((state) => state.accountReducer);
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const [open, setOpen] = useState(false);
  const infoRef = useRef({});
  const onCancel = () => {
    setOpen(false);
  };
  const onOk = async () => {
    if (infoRef.current) {
      for (let keys in infoRef.current) {
        if (!infoRef.current[keys]) {
          delete infoRef.current[keys];
        }
      }
      try {
        if (!infoRef.current.password) {
          if (
            !(
              infoRef.current["new__password"] ===
              infoRef.current["confirm__password"]
            )
          ) {
            throw new Error("Mật khẩu không khớp");
          } else if (passwordValidate(infoRef.current["confirm__password"])) {
            throw new Error(
              "Mật khẩu không đúng định dạng. Mật khấu phải chứa ít nhất một chữ Hoa, một chữ số và ký tự đặc biệt"
            );
          }
        }
        delete infoRef.current["new__password"];
        const result = await updateACustomer(
          getCookie("accessToken"),
          infoRef.current
        );
        dispatch(update(result));
      } catch (err) {
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
      infoRef.current = info;
      modal.confirm({
        title: "Confirm",
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
      title: "Confirm",
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
          Edit Your Profile
        </button>
        <Form className="form__edit" layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name" label="Full Name">
            <Input
              ref={inputRef}
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
              <Form.Item name={"address"} label="Address">
                <Input
                  ref={inputRef}
                  className="form__input"
                  allowClear={<ClearOutlined />}
                  disabled={edit}
                  placeholder={account.address || ""}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="password" label="Password Changes">
            <Input.Password
              type="password"
              className="form__input"
              placeholder="Current Password"
              allowClear={<ClearOutlined />}
              disabled={edit}
              visibilityToggle={{
                visible: passwordVisible1,
                onVisibleChange: setPasswordVisible1,
              }}
            />
          </Form.Item>
          <Form.Item name={"new__password"}>
            <Input.Password
              type="password"
              className="form__input"
              placeholder="New Password"
              allowClear={<ClearOutlined />}
              disabled={edit}
              visibilityToggle={{
                visible: passwordVisible2,
                onVisibleChange: setPasswordVisible2,
              }}
            />
          </Form.Item>
          <Form.Item name={"confirm__password"}>
            <Input.Password
              type="password"
              className="form__input"
              placeholder="Confirm New Password"
              allowClear={<ClearOutlined />}
              disabled={edit}
              visibilityToggle={{
                visible: passwordVisible3,
                onVisibleChange: setPasswordVisible3,
              }}
            />
          </Form.Item>
          <div className="btn__group">
            <button type="button" disabled={edit}>
              Cancel
            </button>
            <button type="submit" disabled={edit}>
              Save Changes
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
