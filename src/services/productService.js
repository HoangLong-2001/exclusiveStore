import queryString from 'query-string';
import { get } from "../utils/request";
export const getAllProducts = async (filter) => {
  console.log("filter: ",filter);
  
  const qs = queryString.stringify(filter, {arrayFormat: 'comma'});
  console.log(qs);
  
  const result = await get(`products?${qs}`);
  return result;
};
export const getAProduct = async (productId) => {
  const result = await get(`products/${productId}`);
  return result;
};
