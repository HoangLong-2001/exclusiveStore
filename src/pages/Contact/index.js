import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./Contact.scss";
import phoneLogo from "./img/icons-phone (1).svg";
import mailLogo from "./img/icons-mail.svg";
import contactLogo from "./img/unnamed.jpg";
const breadcrumbItems = [
  {
    title: <Link to="/">Trang chủ</Link>,
  },
  {
    title: "Liên hệ",
  },
];
export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact__breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="contact__main">
          <div className="contact__left">
            <div className="contact__phone">
              <h3 className="contact__phone--title">
                <img src={phoneLogo} alt="Call To Us" />
                Liên hệ chúng tôi
              </h3>
              <p className="contact__phone--desc">
              Chúng tôi phục vụ 24/7, 7 ngày một tuần.
              </p>
              <p className="contact__phone--number">Phone: 1900.xxx</p>
            </div>
            <div className="contact__mail">
              <h3 className="contact__mail--title">
                <img src={mailLogo} alt="Write To US" />
                Viết thư cho chúng tôi
              </h3>
              <p className="contact__mail--desc">
                Liên hệ cho chúng tôi theo các địa chỉ email sau.
              </p>
              <p className="contact__mail--1">Email 1: customer@exclusive.com</p>
              <p className="contact__mail--2">Email 2: support@exclusive.com</p>
            </div>
          </div>
          <div className="contact__right">
            <img src={contactLogo} alt="contact" width={900} height={500} />
          </div>
        </div>
      </section>
    </>
  );
}
