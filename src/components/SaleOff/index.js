import { useEffect, useState } from "react";
import "./SaleOff.scss";
import { Button } from "antd";
import CountDown from "../../helpers/countDown";
import ProductSale from "../ProductSale";
import useFetch from "../../hooks/useFetch";
export default function SaleOff() {
  const [update, setUpdate] = useState({
    days: CountDown().days < 0 ? 0 : CountDown().days,
    hours: CountDown().hours < 0 ? 0 : CountDown().hours,
    minutes: CountDown().minutes < 0 ? 0 : CountDown().minutes,
    seconds: CountDown().seconds < 0 ? 0 : CountDown().seconds,
  });
  const [total] = useFetch({ "discount>": 0.1 });
  const [pages, setPages] = useState(1);
  const handleClick = (index) => {
    return setPages(pages + index);
  };
  useEffect(() => {
    setInterval(() => {
      const days = CountDown().days < 0 ? 0 : CountDown().days;
      const hours = CountDown().hours < 0 ? 0 : CountDown().hours;
      const minutes = CountDown().minutes < 0 ? 0 : CountDown().minutes;
      const seconds = CountDown().seconds < 0 ? 0 : CountDown().seconds;

      setUpdate({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
  }, []);

  return (
    <>
      <section className="saleOff">
        <div className="saleOff__top">
          <div className="saleOff__top--left">
            <div>
              <div className="saleOff__today">
                <div></div>
                <span>Today’s</span>
              </div>
            </div>
            <div className="saleOff__time">
              <p className="saleOff__desc">Flash Sales</p>
              <div className="saleOff__timer">
                <h3>
                  <span>Days</span> <br />
                  {update.days >= 10 ? update.days : `0${update.days}`}
                </h3>
                <div className="dots">
                  {" "}
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <h3>
                  <span>Hours</span> <br />
                  {update.hours >= 10 ? update.hours : `0${update.hours}`}
                </h3>
                <div className="dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <h3 className="saleOff__minutes">
                  <span>Minutes</span> <br />
                  {update.minutes >= 10 ? update.minutes : `0${update.minutes}`}
                </h3>
                <div className="dots">
                  {" "}
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <h3>
                  <span>Seconds</span> <br />{" "}
                  {update.seconds >= 10 ? update.seconds : `0${update.seconds}`}
                </h3>
              </div>
            </div>
          </div>
          <div className="saleOff__top--right">
            <div className="saleOff__top--btn">
              <Button
                className="saleOff__prev"
                onClick={() => handleClick(-1)}
                disabled={pages === 1 ? true : false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                className="saleOff__next"
                onClick={() => handleClick(+1)}
                disabled={
                  total.products
                    ? pages === parseInt(total.products.length / 4)
                    : false
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="saleOff__products">
          <ProductSale pages={pages} limit={4} />
        </div>
      </section>
    </>
  );
}
