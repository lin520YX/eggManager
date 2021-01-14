'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.ctx.request.body)
    // 设置cookies
    ctx.cookies.set('key','value')

    // egg 设置cookies的参数option

    ctx.cookies.set('key','value',{
      maxAge:24*3600*1000,
      httpOnly:true, //仅仅在服务端显示 在客户端中不展示
      encrypt:true //cookie 加密
    })
   
    await this.ctx.render('home')
  }
  async add() {
    const { ctx } = this;
    console.log(this.ctx.request.body)
     // 获取cookies
     ctx.cookies.get('key')
    // 清空cookies 
    ctx.cookies.set('key',null)
    ctx.body = 'hi, egg';
  }

}

module.exports = HomeController;

