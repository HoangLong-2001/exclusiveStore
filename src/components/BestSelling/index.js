import { Row, Col } from "antd";
import "./BestSelling.scss";
import ProductCard from "../ProductCard";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFilter, resetFilter } from "../../actions/filter";
export default function BestSelling() {
  const [data] = useFetch({ limit: 4, "rate>": 4 });
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
      <section className="bestSelling">
        <div className="bestSelling__top">
          <div className="bestSelling__top--left">
            <div>
              <div className="bestSelling__today">
                <div></div>
                <span>This Month</span>
              </div>
            </div>
            <div className="bestSelling__title">
              <p className="bestSelling__desc">Best Selling Products</p>
            </div>
          </div>
          <div className="bestSelling__top--right">
            <button
              onClick={() =>
                handleChoice(
                  { "rate>":4 },
                  "/allProducts"
                )
              }
            >
              View All
            </button>
          </div>
        </div>
        <div className="bestSelling__products">
          <Row gutter={30}>
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
