import { Badge, Col, Row } from "antd";
import ProductCard from "../ProductCard";
import useFetch from "../../hooks/useFetch";
export default function ProductSale(props) {
  const { pages, limit } = props;
  const [data] = useFetch({ limit, pages, "discount>": 0.1 });
  return (
    <Row gutter={20}>
      {data.isLoading &&
        data.products.map((item, idx) => (
          <Col span={6} key={idx}>
            <Badge.Ribbon
              text={parseInt(item.discount * 100) + " %"}
              color="red"
            >
              <ProductCard item={item} />
            </Badge.Ribbon>
          </Col>
        ))}
    </Row>
  );
}
