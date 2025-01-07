export default function forgotReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_EMAIL":
      return { ...state, email: action.email };
    case "ADD_PASSWORD":
      return { ...state, password: action.password };
    case "ADD_OTP":
      return { ...state, otp: action.otp };

  }
  return state
}
