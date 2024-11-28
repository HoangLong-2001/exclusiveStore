import priceFormat from "./priceFormat";

export function priceCaculator(price, discount) {
  return priceFormat(price - price * discount);
}
