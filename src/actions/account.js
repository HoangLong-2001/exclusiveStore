export const get = (data)=>{
    return{
        type:"GET_ACCOUNT",
        data:data
    }
}
export const update = (data)=>{
    return {
        type:"UPDATE_ACCOUNT",
        data
    }
}