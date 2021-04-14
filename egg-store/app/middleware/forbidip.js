module.exports = (options,app)=>{
    return async function forbidip(ctx,next){
        if(ctx.request.ip==='127.0.0.1'){
            await next()
            // ctx.status = 403;
            // ctx.body = 'ypb'
        }else{
            await next()
        }
       
    }
}