import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAProduct } from "../../services/productService";
import { Badge, Breadcrumb, Image, Rate } from "antd";
import priceFormat from "../../helpers/priceFormat";
import { priceCaculator } from "../../helpers/caculatePrice";
import { Link } from "react-router-dom";
import "./ProductDetail.scss";
import deliveryIco from "./img/icon-delivery.svg";
import returnIco from "./img/Icon-return.svg";
import RelatedProduct from "../../components/RelatedProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [choice, setChoice] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    { title: <Link to="/allProducts">Shop</Link> },
    {
      title: `${product.title}`,
    },
  ];
  console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 200);
  }, []);
  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        const result = await getAProduct(productId);
        setProduct(result.data);
        setLoading(true);
        setColor(result.data.colors[0]);
        setSize(result.data.sizes[0]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [productId]);
  const handleAddToCart = () => {
    if (
      cart.some(
        (itemCart) => itemCart._id === product._id + `-${color}-${size}`
      )
    ) {
      console.log(true);

      dispatch(
        updateQuantity(product._id + `-${color}-${size}`, count, color, size)
      );
    } else {
      dispatch(
        addToCart(
          product._id + `-${color}-${size}`,
          product,
          count,
          color,
          size
        )
      );
    }
  };
  return (
    <>
      <div className="productDetail">
        <div className="productDetail__breadcrumb">
          <Breadcrumb items={items} />
        </div>

        <div className="productDetail__detail">
          {isLoading && (
            <>
              {" "}
              <div className="productDetail__imageChoices">
                {product.images.map((item, index) => (
                  <img
                    width={"100%"}
                    height={138}
                    src={item}
                    key={index}
                    onClick={() => {
                      setChoice(index);
                    }}
                    alt="choice"
                  />
                ))}
              </div>
              <div className="productDetail__image">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={product.images[choice]}
                  alt={product.title}
                />
              </div>
              <div className="productDetail__info">
                <h1 className="productDetail__info--title">{product.title}</h1>
                <div className="productDetail__info--rating">
                  <span className="rate">
                    <Rate allowHalf value={product.rate} disabled />
                  </span>
                  <span className="reviews">
                    ({product.reviews.length} Reviews)
                  </span>
                  <span className="stock">
                    {product.stock ? (
                      "Còn hàng"
                    ) : (
                      <span className="outStock">Hết hàng</span>
                    )}
                  </span>
                </div>
                <p className="productDetail__info--price">
                  {product.discount > 0 ? (
                    <>
                      {" "}
                      <span className="newPrice">
                        {priceFormat(
                          priceCaculator(product.price, product.discount)
                        )}
                      </span>
                      <span className="oldPrice">
                        {" "}
                        {priceFormat(product.price)}
                      </span>
                      <span className="discount">
                        {product.discount * 100} %
                      </span>
                    </>
                  ) : (
                    <span> {priceFormat(product.price)}</span>
                  )}
                </p>

                <p className="productDetail__info--desc">
                  {product.description}
                </p>
                <div className="productDetail__info--line"></div>
                <div className="productDetail__info--colors">
                  Colors:{" "}
                  {product.colors.map((item, idx) => (
                    <>
                      {item === color ? (
                        <Badge dot color="black" key={idx}>
                          <button
                            className={"color__choice active"}
                            key={idx}
                            onClick={() => {
                              setColor(item);
                            }}
                          >
                            {item}
                          </button>
                        </Badge>
                      ) : (
                        <button
                          className={"color__choice"}
                          key={idx}
                          onClick={() => setColor(item)}
                        >
                          {item}
                        </button>
                      )}
                    </>
                  ))}
                </div>
                <div className="productDetail__info--sizes">
                  Size:
                  {product.sizes.map((item, idx) => (
                    <>
                      {item === size ? (
                        <Badge dot color="black">
                          <button
                            className={"size__choice active"}
                            key={idx}
                            onClick={() => {
                              setSize(item);
                            }}
                          >
                            {item}
                          </button>
                        </Badge>
                      ) : (
                        <button
                          className={"size__choice"}
                          key={idx}
                          onClick={() => setSize(item)}
                        >
                          {item}
                        </button>
                      )}
                    </>
                  ))}{" "}
                </div>
                <div className="productDetail__info--btn">
                  <div className="productDetail__btn--count btn">
                    <button
                      className="productDetail__btn--down"
                      onClick={() => {
                        count === 1 ? console.log() : setCount(count - 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 12H4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <span className="productDetail__btn--number">{count}</span>
                    <button
                      className="productDetail__btn--up btn "
                      onClick={() =>
                        count === product.stock
                          ? console.log()
                          : setCount(count + 1)
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
                          d="M12 20V12M12 12V4M12 12H20M12 12H4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    className="productDetail__btn--buyNow"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button className="productDetail__btn--wishlist">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="productDetail__info--extra">
                  <div className="productDetail__info--free">
                    <img src={deliveryIco} alt="delivery" />
                    <div className="text">
                      <h1 className="title">Free Delivery</h1>
                      <p className="desc">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                  <div className="productDetail__info--return">
                    <img src={returnIco} alt="return" />
                    <div className="text">
                      <h1 className="title">Free Delivery</h1>
                      <p className="desc">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="productDetail__related">
          <div className="productDetail__related--top">
            <div className="productDetail__related--left">
              <div>
                <div className="productDetail__related--title">
                  <div></div>
                  <span>This Month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productDetail__related--products"></div>
        <RelatedProduct category={product.category} />
      </div>
    </>
  );
}
