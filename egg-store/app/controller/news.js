'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
    async index(){
       console.log( this.ctx.foo())
       const {result} = await this.service.news.getNewList()
       return this.ctx.render('/news',{list:result})
    }
    async newsContent(){
       const {aid} =  this.ctx.query
        const {result} = await this.service.news.getNewContent(aid)
       await this.ctx.render('/newsContent',{
           content:result[0]
       })
    }
  }
 module.exports = NewsController;
