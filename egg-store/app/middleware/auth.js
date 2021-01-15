module.exports = (options,app)=>{
    return async function auth(ctx,next){
        console.log('options',options)
        ctx.locals.csrf = ctx.csrf
        await next()
    }
}