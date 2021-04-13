'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.ctx.request.body)
    // 设置cookies
    // ctx.cookies.set('key','value')

    // egg 设置cookies的参数option

    ctx.cookies.set('key','value',{
      maxAge:24*3600*1000,
      // httpOnly:true, //仅仅在服务端显示 在客户端中不展示
      encrypt:true, //cookie 加密
      signed:false
    })
   
    // await this.ctx.render('home')
    this.ctx.body = {name:1}
     await this.ctx.render('home')
  }
  async add() {
    const { ctx } = this;
    console.log('111',ctx.cookies.get('key'))
    console.log('1112',this.ctx.request.body)
     // 获取cookies
    
    // 清空cookies 
    // 设置为null 或者 maxAge 过期时间设置0 或者-1
    ctx.cookies.set('key',null)
    ctx.body = 'hi, egg';
  }
  // session 是另外一种记录客户状态的机制 不同的是cookie保存在客户端浏览器中，而session 保存在服务器上

  // 工作原理当浏览器访问服务器并且发送第一次请求时，服务端会创建一个session对象，生成一个类似
  // key，value的键值对，然后将key（cookie）返回到客户端返回到客户端，浏览器下次再访问时，携带key，
  // 找到对应的session（value）

  // egg中session的使用
  // egg中session基于egg-session内置了对session的操作
  async settingSession(){
    const { ctx } = this;
    ctx.session.userInfo = {
      name:'lyf'
    }
    await this.ctx.render('home')
  }
  async getSession(){
    const { ctx } = this;
    ctx.session.userInfo
    await this.ctx.render('news')
  }
 

}

module.exports = HomeController;
 // 默认配置
//  exports.session = {
//   key:'EGG_SESS',
//   maxAge:24*3600*1000,
//   httpOnly:true,
//   encrypt:true
// }

