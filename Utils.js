const isArrayEmpty=()=>{
    if(arr!==undefined && arr!==null && arr.length>0){
        return true;

    }
    return false;
}

const dumlogs=(message)=>{
    console.log(message);
}
export { isArrayEmpty,dumlogs}