import { useDispatch } from "react-redux";
import { updateQuantity, deleteItem } from "../../actions/cart";
import { priceCaculator } from "../../helpers/caculatePrice";
import { Button, InputNumber } from "antd";
import priceFormat from "../../helpers/priceFormat";
import { DeleteOutlined } from "@ant-design/icons";
export default function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const handleStep = (value, { type }) => {
    switch (type) {
      case "up":
        return dispatch(updateQuantity(item._id, 1, item.color, item.size));
      case "down":
        if (item.quantity > 1)
          return dispatch(updateQuantity(item._id, -1, item.color, item.size));
        else if (value === 0) return dispatch(deleteItem(item._id));
        break;
      default:
        return;
    }
  };
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };
  return (
    <tr className="cart__item" key={item._id}>
      <td>
        <div className="cart__title">
          <img src={item.info.images[0]} alt={item.info.title} />
          <h4>
            {item.info.title}
            <br />
            <span>
              {item.size}/{item.color}
            </span>
          </h4>
        </div>
      </td>

      <td className="cart__price-new">
        {priceCaculator(item.info.price, item.info.discount)}
      </td>
      <td>
        <p className="cart__quantity">
          <InputNumber
            width={72}
            height={44}
            min={0}
            max={item.info?.stock}
            defaultValue={item.quantity}
            onStep={handleStep}
          />
        </p>
      </td>
      <td className="cart__subtotal">
        {priceFormat(
          item.quantity *
            (item.info.price - item.info.price * item.info.discount)
        )}
      </td>
      <td>
        <Button icon={<DeleteOutlined />} onClick={handleDelete}></Button>
      </td>
    </tr>
  );
}
