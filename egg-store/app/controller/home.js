'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.ctx.request.body)
    await this.ctx.render('home')
  }
  async add() {
    const { ctx } = this;
    console.log(this.ctx.request.body)
    ctx.body = 'hi, egg';
  }

}

module.exports = HomeController;

