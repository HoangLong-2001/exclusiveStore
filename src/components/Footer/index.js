import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="main__content">
        <div className="footer__top">
          <div className="footer__column1">
            <h2 className="footer__column1--title">Exclusive</h2>
            <h3>Subscribe</h3>
            <p className="footer__desc">Get 10% off your first order</p>
            <form className="footer__emailInput">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="footer__column2">
            <h2 className="footer__column--title">Support</h2>
            <ul>
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div className="footer__column3">
            <h2 className="footer__column--title">Account</h2>
            <ul>
              <li>
                <Link to="private/info">My Account</Link>
              </li>
              <li>
                <span>
                  <Link to="/login">Login</Link> /{" "}
                  <Link to="/register">Register</Link>
                </span>
              </li>
              <li>
                <Link to="private/cart">Cart</Link>
              </li>
              <li>
                <Link>Wishlist</Link>
              </li>
              <li>
                <Link to={"allProducts"}>Shop</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column4">
            <h2 className="footer__column--title">Quick Link</h2>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms Of Use</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column5">
            <h2 className="footer__column--title">Download App</h2>
            <div>
              <p></p>
              <div></div>
            </div>
          </div>
        </div>
        <p className="footer__copyright">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M9.50002 18.3332C14.1024 18.3332 17.8334 14.6022 17.8334 9.99984C17.8334 5.39746 14.1024 1.6665 9.50002 1.6665C4.89765 1.6665 1.16669 5.39746 1.16669 9.99984C1.16669 14.6022 4.89765 18.3332 9.50002 18.3332Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.14799C12 8.14799 10.9706 6.6665 9.25492 6.6665C7.53924 6.6665 6.16669 8.14799 6.16669 9.99984C6.16669 11.8517 7.53924 13.3332 9.25492 13.3332C10.9706 13.3332 12 11.8517 12 11.8517"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copyright 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}
