import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import nikeLogo from "./img/nikeLogo.svg";
import shoes from "./img/shoes.png";
import dropdownIcon from "./img/DropDown.svg";
import "./Hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, resetFilter } from "../../actions/filter";
export default function Hero() {
  useSelector((state) => state.paramsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChoice = (filter, to) => {
    dispatch(resetFilter());
    dispatch(addFilter(filter));
    navigate(to);
  };
  return (
    <>
      <section className="hero">
        <aside className="hero__left">
          <ul>
            <li className="parent--1">
              <span
                onClick={() =>
                  handleChoice({ genders: ["MEN"] }, "/allProducts")
                }
              >
                Nam
              </span>
              <img src={dropdownIcon} alt="dropdownIcon" />
              <div className="hero__extend">
                <ul>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["MEN"], category: ["shirt"] },
                        "/allProducts"
                      )
                    }
                  >
                    Áo nam
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["Men"], category: ["trousers"] },
                        "/allProducts"
                      )
                    }
                  >
                    Quần nam
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["Men"], category: ["shoes"] },
                        "/allProducts"
                      )
                    }
                  >
                    Giày nam
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["Men"], category: ["accessory"] },
                        "/allProducts"
                      )
                    }
                  >
                    Phụ kiện nam
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent--2">
              <span
                onClick={() =>
                  handleChoice({ genders: ["WOMEN"] }, "/allProducts")
                }
              >
                Nữ
              </span>{" "}
              <img src={dropdownIcon} alt="dropdownIcon" />
              <div className="hero__extend">
                <ul>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["WOMEN"], category: ["shirt"] },
                        "/allProducts"
                      )
                    }
                  >
                    Áo nữ
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["WOMEN"], category: ["trousers"] },
                        "/allProducts"
                      )
                    }
                  >
                    Quần nữ
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["WOMEN"], category: ["shoes"] },
                        "/allProducts"
                      )
                    }
                  >
                    Giày nữ
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["WOMEN"], category: ["accessory"] },
                        "/allProducts"
                      )
                    }
                  >
                    Phụ kiện nữ
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent--3">
              <span
                onClick={() =>
                  handleChoice({ genders: ["KIDS"] }, "/allProducts")
                }
              >
                Trẻ em
              </span>
              <img src={dropdownIcon} alt="dropdownIcon" />
              <div className="hero__extend">
                <ul>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["BOYS"], category: ["shirt"] },
                        "/allProducts"
                      )
                    }
                  >
                    Áo bé trai
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["BOYS"], category: ["trousers"] },
                        "/allProducts"
                      )
                    }
                  >
                    Quần bé trai
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["GIRLS"], category: ["shoes"] },
                        "/allProducts"
                      )
                    }
                  >
                    Áo bé gái
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["GIRLS"], category: ["accessory"] },
                        "/allProducts"
                      )
                    }
                  >
                    Quần bé giá
                  </li>
                  <li
                    onClick={() =>
                      handleChoice(
                        { genders: ["KIDS"], category: ["accessory"] },
                        "/allProducts"
                      )
                    }
                  >
                    Phụ kiện
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent--4">
              <Link>Thương hiệu</Link>
              <img src={dropdownIcon} alt="dropdownIcon" />
              <div className="hero__extend">
                <ul>
                  <li
                    onClick={() =>
                      handleChoice({ brand: ["NIKE"] }, "/allProducts")
                    }
                  >
                    Nike
                  </li>
                  <li
                    onClick={() =>
                      handleChoice({ brand: ["ADIDAS"] }, "/allProducts")
                    }
                  >
                    Adidas
                  </li>
                  <li
                    onClick={() =>
                      handleChoice({ brand: ["ASICS"] }, "/allProducts")
                    }
                  >
                    ASICS
                  </li>
                  <li
                    onClick={() =>
                      handleChoice({ brand: ["ANTA"] }, "/allProducts")
                    }
                  >
                    Anta
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </aside>
        <div className="hero__right">
          <Carousel autoplay autoplaySpeed={5000}>
            <div>
              <div className="hero__swipper--1">
                <section className="hero__swipper--left">
                  <div data-aos="fade-down" className="hero__swipper--title">
                    <img src={nikeLogo} width={45} alt="logo" />
                    <span>Giannis Immortality 4 EP</span>
                  </div>
                  <p data-aos="fade-up" className="hero__swipper--desc">
                    Up to 10% off Voucher
                  </p>
                  <div data-aos="fade-up" className="hero__swipper--bottom">
                    <span
                      href="#!"
                      onClick={() => handleChoice({}, "/allProducts")}
                    >
                      Shop Now
                    </span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.5 12H20M20 12L13 5M20 12L13 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </section>
                <div className="hero__swipper--right">
                  <img
                    data-aos="fade-left"
                    src={shoes}
                    width={496}
                    height={328}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="hero__swipper--1">
                <section className="hero__swipper--left">
                  <div className="hero__swipper--title">
                    <img src={nikeLogo} width={45} alt="logo" />
                    <span>Giannis Immortality 4 EP</span>
                  </div>
                  <p className="hero__swipper--desc">Up to 10% off Voucher</p>
                  <div className="hero__swipper--bottom">
                    <a href="#!">Shop Now</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.5 12H20M20 12L13 5M20 12L13 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </section>
                <div className="hero__swipper--right">
                  <img src={shoes} width={496} height={328} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="hero__swipper--1">
                <section className="hero__swipper--left">
                  <div className="hero__swipper--title">
                    <img src={nikeLogo} width={45} alt="logo" />
                    <span>Giannis Immortality 4 EP</span>
                  </div>
                  <p className="hero__swipper--desc">Up to 10% off Voucher</p>
                  <div className="hero__swipper--bottom">
                    <Link to="/register">Shop Now</Link>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.5 12H20M20 12L13 5M20 12L13 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </section>
                <div className="hero__swipper--right">
                  <img src={shoes} width={496} height={328} alt="" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
