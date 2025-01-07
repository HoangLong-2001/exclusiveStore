import { postAuth } from "../utils/requestAuth"
import {getCookie} from "../helpers/cookie"
export const orderPayment = async (data)=>{
    const result = await postAuth("payment",data,getCookie('accessToken'))
    return result
}