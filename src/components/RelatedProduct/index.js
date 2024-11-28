import { useState } from "react";
import { getAllProducts } from "../../services/productService";

export default function RelatedProduct({ category }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchApi = async () => {
    try {
      setLoading(false);
      const result = await getAllProducts({ limit: 4, category: category });
      setData(result);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  return <></>;
}
