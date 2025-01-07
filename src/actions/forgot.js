export const addEmail = (email) => {
  return {
    type: "ADD_EMAIL",
    email,
  };
};
export const addPassword = (password) => {
  return {
    type: "ADD_PASSWORD",
    password,
  };
};
export const addOTP = (otp) => {
  return {
    type: "ADD_OTP",
    otp,
  };
};
