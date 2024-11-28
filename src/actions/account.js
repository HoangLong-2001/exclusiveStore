export const get = (data)=>{
    return{
        type:"GET",
        data:data
    }
}
export const update = (data)=>{
    return {
        type:"UPDATE",
        data
    }
}