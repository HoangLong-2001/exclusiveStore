import { Card, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { priceCaculator } from "../../helpers/caculatePrice";
import priceFormat from "../../helpers/priceFormat";
export default function ProductCard(props) {
  const navigate = useNavigate();
  const { item } = props;
  const handleClick = () => {
    navigate(`/${item._id}`);
  };
  return (
    <div key={item._id}>
      <Card
        hoverable
        cover={
          <img
            alt={item.title}
            width="auto"
            height="300px"
            src={item.images[0]}
          />
        }
        onClick={handleClick}
        className="card"
      >
        <div className="card__body">
          <h1 className="card__title">{item.title}</h1>
          <div className="card__price">
            <span className="card__newPrice">
              {priceFormat(item.discountPrice)}
            </span>
            {item.discount ? (
              <span className="card__oldPrice">{priceFormat(item.price)}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="card__rate">
            <Rate allowHalf defaultValue={item.rate} disabled></Rate>
            <span className="card__review">({item.reviews.length})</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
