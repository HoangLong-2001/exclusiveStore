export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      state = true;
      return state;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};
