import { useDispatch, useSelector } from "react-redux";
import priceFormat from "../../helpers/priceFormat";
import deleteIcon from "./img/icon-delete.svg";
import "./Wishlist.scss";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../actions/wishlist";
import { useEffect } from "react";
export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (e, id) => {
    e.stopPropagation();
    console.log('check delete id:',id);
    
    dispatch(deleteItem(id));
  };
  console.log("check wishlist page:", wishlist);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="wishlist">
      <div className="wishlist__info">
        <h3>Wishlist ({wishlist.length})</h3>
      </div>

      <div className="wishlist__list">
        {wishlist.length &&
          wishlist.map((item, index) => (
            <div
              className="wishlist__cart"
              key={index}
              onClick={() => navigate("/" + item.product?._id)}
            >
              <div className="wishlist__cart--img">
                <img src={item.product?.images[0]} alt={item.product?.title} />
              </div>
              <div className="wishlist__body">
                <h3 className="wishlist__cart--title">{item.product?.title}</h3>
                <div className="wishlist__cart--price">
                  <span className="wishlist__cart--newPrice">
                    {priceFormat(item.product?.discountPrice)}
                  </span>
                  <span className="wishlist__cart--oldPrice">
                    {priceFormat(item.product?.price)}
                  </span>
                </div>
              </div>
              {item.product?.discount ? (
                <span className="wishlist__cart--discount">
                  {item.product?.discount * 100}%
                </span>
              ) : (
                <></>
              )}
              <button
                className="wishlist__cart--delete"
                onClick={(e) => handleDelete(e, item._id)}
              >
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
