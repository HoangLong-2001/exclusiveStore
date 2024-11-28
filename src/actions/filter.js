export const addFilter = (params) => {
  return {
    type: "ADD",
    params,
  };
};

export const resetFilter = () => {
  return {
    type: "RESET",
  };
};
export const deleteFilter = (params) => {
  return {
    type: "DELETE",
    params,
  };
};
