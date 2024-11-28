import { Link } from "react-router-dom";
import { Carousel} from "antd";
import appleLogo from "./img/appleLogo.svg";
import arrowIcon from "./img/arrowIcon.svg";
import iphone from "./img/iphone.png";
import dropdownIcon from "./img/DropDown.svg";
import './Hero.scss'
export default function Hero(){
    return<> <section className="hero">
    <aside className="hero__left">
      <ul>
        <li>
          <Link>Woman’s Fashion</Link> <img src={dropdownIcon} alt="" />
        </li>
        <li>
          <Link>Men’s Fashion</Link> <img src={dropdownIcon} alt="" />
        </li>
        <li>
          <Link>Electronics</Link>
        </li>
        <li>
          <Link>Home & Lifestyle</Link>
        </li>
        <li>
          <Link>Medicine</Link>
        </li>
        <li>
          <Link>Sports & Outdoor</Link>
        </li>
        <li>
          <Link>Baby’s & Toys</Link>
        </li>
        <li>
          <Link>Groceries & Pets</Link>
        </li>
        <li>
          <Link>Health & Beauty</Link>
        </li>
      </ul>
    </aside>
    <div className="hero__right">
      <Carousel autoplay>
<div>
          <div className="hero__swipper--1">
            <section className="hero__swipper--left">
              <div className="hero__swipper--title">
                <img src={appleLogo} alt="" />
                <span>iPhone 14 Series</span>
              </div>
              <p className="hero__swipper--desc">Up to 10% off Voucher</p>
              <div className="hero__swipper--bottom">
                <a href="#!">Shop Now</a> <img src={arrowIcon} alt="" />
              </div>
            </section>
            <div className="hero__swipper--right">
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="hero__swipper--1">
            <section className="hero__swipper--left">
              <div className="hero__swipper--title">
                <img src={appleLogo} a        lt="" />
                <span>iPhone 14 Series</span>
              </div>
              <p className="hero__swipper--desc">Up to 10% off Voucher</p>
              <div className="hero__swipper--bottom">
                <a href="#!">Shop Now</a> <img src={arrowIcon} alt="" />
              </div>
            </section>
            <div className="hero__swipper--right">
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="hero__swipper--1">
            <section className="hero__swipper--left">
              <div className="hero__swipper--title">
                <img src={appleLogo} alt="" />
                <span>iPhone 14 Series</span>
              </div>
              <p className="hero__swipper--desc">Up to 10% off Voucher</p>
              <div className="hero__swipper--bottom">
                <a href="#!">Shop Now</a> <img src={arrowIcon} alt="" />
              </div>
            </section>
            <div className="hero__swipper--right">
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </section></>
}