import "./Home.scss";
import Hero from "../../components/Hero";
import SaleOff from "../../components/SaleOff";
import Categories from "../../components/Categories";
import BestSelling from "../../components/BestSelling";
import ExploreProducts from "../../components/ExploreProducts";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <SaleOff />
      <Categories />
      <BestSelling />
      <ExploreProducts />
    </>
  );
}
