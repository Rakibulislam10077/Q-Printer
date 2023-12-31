export const logFunc=(payload:any)=>{
    if (process.env.NODE_ENV==="development") {
        console.log(process.env.NODE_ENV);
        
        console.log(payload);
    }else{
        return
    }
}