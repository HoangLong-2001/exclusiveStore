import { getAuth, putAuth } from "../utils/requestAuth";

export const getAccount = async (token) => {
  const result = await getAuth("customer", token);
  return result;
};
export const updateACustomer = async (token, options) => {
  console.log(options);

  const result = await putAuth("customer", token, options);
  return result;
};
