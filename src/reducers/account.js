export const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET":
      return action.data;
    case "UPDATE":
      return action.data;
    default: {
      return state;
    }
  }
};
