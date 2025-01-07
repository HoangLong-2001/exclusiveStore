import { useState } from "react";
import "./SaleOff.scss";
import { Button } from "antd";
import ProductSale from "../ProductSale";
import useFetch from "../../hooks/useFetch";
import CountDown from "../CountDown";
export default function SaleOff() {
  const [total] = useFetch({ "discount>": 0.1 });
  console.log(total);

  const [pages, setPages] = useState(1);
  const handleClick = (index) => {
    return setPages(pages + index);
  };

  return (
    <>
      <section className="saleOff">
        <div className="saleOff__top">
          <div className="saleOff__top--left">
            <div>
              <div className="saleOff__today">
                <div></div>
                <span>Hôm nay</span>
              </div>
            </div>
            <div className="saleOff__time">
              <p className="saleOff__desc">Flash Sales</p>
              <CountDown />
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
                  total.products.length <= 4 ||
                  pages === parseInt(total.products.length / 4)
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
