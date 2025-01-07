import { Outlet } from "react-router-dom";
import "./ForgotPassword.scss"
import { useEffect } from "react";
export default function ForgotPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="forgotPassword">
      <Outlet />
    </div>
  );
}
