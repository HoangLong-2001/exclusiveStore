import pic from "./img/pictureLeft.svg";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import "./Login.scss";
import { useState } from "react";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { setLogin } from "../../actions/login";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkLogin, setCheckLogin] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    if (!(email && password)) {
      setCheckLogin("Vui lòng nhập vào email và password");
      return;
    }
    try {
      const result = await login(email, password);
      setCookie("accessToken", result.tokens.accessToken, 1 / 24);
      setCookie("refreshToken", result.tokens.refreshToken, 30);
      dispatch(setLogin());
      navigate("/");
    } catch (err) {
      console.log(">>> Check Login error", err);

      setCheckLogin(err.message);
    }
  };
  return (
    <section className="login">
      <div className="login__left">
        <img src={pic} className="picture" alt="login" />
      </div>
      <div className="login__right">
        <form onSubmit={handleSubmit}>
          <h1 className="login__title">Log in to Exclusive</h1>
          <p className="login__desc">Enter your details below</p>
          <p className={"login__warning"}>{checkLogin}</p>
          <div className="input__field">
            <input type="text" placeholder="Enter your email address" />
          </div>

          <div className="input__field">
            <input type="password" placeholder="Password" />
          </div>
          <div className="btn__group">
            <input type="submit" placeholder="Login" />
            <Link>Forget Password?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
