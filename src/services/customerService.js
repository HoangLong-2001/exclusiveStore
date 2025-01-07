import { post, put } from "../utils/request";
import { getAuth, putAuth } from "../utils/requestAuth";

export const getAccount = async (token) => {
  const result = await getAuth("customer", token);
  return result;
};
export const updateACustomer = async (token, options) => {
  console.log(options,token);
  const result = await putAuth("customer", token, options);
  return result;
};
export const sendEmail = async(data)=>{
  const result = await post('otp/sendOTP',data)
  return result
}
export const verifyOtp = async(data)=>{
  const result = await post('otp/verifyOTP',data)
  return result
}
export const changePassword = async (data) => {
  const result = await put('auth/forgotPassword',data);
  return result
}