import { useNavigate } from "react-router-dom";
import "./Categories.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, resetFilter} from "../../actions/filter";
export default function Categories() {
  useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChoice =(params, to) => {
    dispatch(resetFilter());
    dispatch(addFilter(params));
    navigate(to);
  };
  return (
    <>
      <section className="categories">
        <div className="categories__top">
          <div className="categories__top--left">
            <div>
              <div className="categories__today">
                <div></div>
                <span>Categories</span>
              </div>
            </div>
            <div className="categories__time">
              <p className="categories__desc">Browse By Category</p>
            </div>
          </div>
        </div>
        <div className="categories__items">
          <span className="categories__item" onClick={() => handleChoice({category: ["shirt"] }, "/allProducts")}>Áo</span>
          <span className="categories__item" onClick={() => handleChoice({category: ["trousers"] }, "/allProducts")}> Quần</span>
          <span className="categories__item" onClick={() => handleChoice({category: ["shoes"] }, "/allProducts")}>Giày</span>
          <span className="categories__item" onClick={() => handleChoice({category: ["accessory"] }, "/allProducts")}>Phụ kiện</span>
          <span className="categories__item" onClick={() => handleChoice({newArrival: [true] }, "/allProducts")}>Hàng Mới</span>
        </div>
      </section>
    </>
  );
}
