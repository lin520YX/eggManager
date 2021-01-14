module.exports = (options,app)=>{
    return async function auth(ctx,next){
        ctx.locals.csrf = ctx.csrf
        await next()
    }
}