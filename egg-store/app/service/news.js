'use strict';
const Service = require('egg').Service;
class NewsService extends Service {
    async getNewList(){
        const url = this.config.api
       const {data} =  await this.ctx.curl(`${url}appapi.php?a=getPortalList&catid=20&page=1`)
       
       // 服务之中也能调用服务
        return  JSON.parse(data)
    }
    async getNewContent(id){
        const url = this.config.api
       const {data} =  await this.ctx.curl(`${url}appapi.php?a=getPortalArticle&aid=${id}`)
       console.log(data)
       // 服务之中也能调用服务
        return  JSON.parse(data)
    }
}
module.exports  = NewsService;
