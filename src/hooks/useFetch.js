import { useEffect, useReducer } from "react";
import { getAllProducts } from "../services/productService";

function fetchReducer(state, action) {
  switch (action.type) {
    case "success":
      return {
        isLoading: action.isLoading,
        products: action.data,
        error: null,
      };
    case "failure":
      return {
        isLoading: true,
        products: action.data,
        error: action.error,
      };
    default:
      return state;
  }
}
export default function useFetch(params) {
  const [data, dispatch] = useReducer(fetchReducer, {
    isLoading: false,
    products: [],
    error: null,
  });
  const page = params.pages || 1;
  const filter = params.checkFilter || -1;
  const skip = params.pages ? (page - 1) * params.limit : 0;
  delete params.pages;
  delete params.checkFilter;
  const fetchApi = async () => {
    try {
      const result = await getAllProducts({ ...params, skip });
      dispatch({ type: "success", isLoading: true, data: result.data });
    } catch (err) {
      dispatch({ type: "failure", isLoading: false, data: [], error: err });
    }
  };
  useEffect(() => {
    fetchApi();
  }, [page, filter]);
  return [data];
}
