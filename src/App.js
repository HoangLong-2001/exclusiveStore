import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AllRouter from "./components/AllRouter";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <AllRouter />
    </>
  );
}

export default App;
