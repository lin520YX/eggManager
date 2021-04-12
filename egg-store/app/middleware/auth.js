module.exports = (options,app)=>{
    return async function auth(ctx,next){
        console.log('options',options)
        // CSRF 攻击：伪造用户请求向网站发起恶意请求
        ctx.state.csrf = ctx.csrf
        await next()
    }
}