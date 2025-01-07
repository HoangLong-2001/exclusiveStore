export const addFilter = (params) => {
  return {
    type: "ADD_FILTER",
    params,
  };
};

export const resetFilter = () => {
  return {
    type: "RESET_FILTER",
  };
};
export const deleteFilter = (params) => {
  return {
    type: "DELETE_FILTER",
    params,
  };
};
