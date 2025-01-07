export const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ACCOUNT":
      return action.data;
    case "UPDATE_ACCOUNT":
      return action.data;
    default: {
      return state;
    }
  }
};
