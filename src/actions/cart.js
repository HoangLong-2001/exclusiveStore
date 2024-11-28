export const addToCart = (id, info, quantity = 1, color, size) => {
  return {
    type: "ADD_TO_CART",
    _id: id,
    info: info,
    quantity: quantity,
    color,
    size,
  };
};
export const updateQuantity = (id, quantity = 1, color, size) => {
  return {
    type: "UPDATE_QUANTITY",
    _id: id,
    quantity: quantity,
    color,
    size,
  };
};
export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    _id: id,
  };
};
export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
export const fetchCart = (data) => {
  return {
    type: "FETCH",
    data,
  };
};
