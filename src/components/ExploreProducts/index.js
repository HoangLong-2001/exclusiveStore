import { useState } from "react";
import { Button, Row, Col } from "antd";
import "./ExploreProducts.scss";
import ProductCard from "../ProductCard";
import useFetch from "../../hooks/useFetch";
export default function ExploreProducts() {
  const [pages, setPages] = useState(1);
  const [data] = useFetch({ limit: 8, pages });
  const [total] = useFetch({ });

  const handleClick = (count) => {
    setPages(pages + count);
  };
  return (
    <>
      <section className="exploreProducts">
        <div className="exploreProducts__top">
          <div className="exploreProducts__top--left">
            <div>
              <div className="exploreProducts__today">
                <div></div>
                <span>Sản phẩm của chúng tôi</span>
              </div>
            </div>
            <div className="exploreProducts__time">
              <p className="exploreProducts__desc">Sản phẩm của chúng tôi</p>
            </div>
          </div>
          <div className="exploreProducts__top--right">
            <div className="exploreProducts__top--btn">
              <Button
                className="exploreProducts__prev"
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
                className="exploreProducts__next"
                onClick={() => handleClick(+1)}
                disabled={
                  total.products.length <= 8 ||
                  pages === parseInt(total.products.length / 8)
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
        <div className="exploreProducts__products">
          <Row gutter={[30, 60]}>
            {data.isLoading &&
              data.products.map((item, idx) => (
                <Col span={6} key={idx}>
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
        </div>
      </section>
    </>
  );
}
