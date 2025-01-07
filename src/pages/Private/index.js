import { useEffect } from "react";
import { getCookie } from "../../helpers/cookie";
import { Outlet, useNavigate } from "react-router-dom";
export default function Private() {
  const navigate = useNavigate();
  useEffect(() => {
    (() => {
      if (!getCookie("refreshToken")) {
        navigate("/");
      }
    })();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
