/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609513199159_3342';

  // add your middleware config here
  config.middleware = ['auth','compress','adminAuth'];

  config.view = {
    mapping:{
      '.html':'ejs'
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.session = {
    key:'SESSION_ID',
    maxAge:864000,
    renew:true
  }
// 对中间件传递参数
  config.auth ={
    // enable：控制中间件是否开启。
    //  match：设置只有符合某些规则的请求才会经过这个中间件。
    //   ignore：设置符合某些规则的请求不经过这个中间件。
    // enable:false, 
    // match: '/news',
    // ignore:'/news',
    title:'1111111',
    // 某些路由不经过这个中间件
    math(ctx){
      const {url } = ctx.request
      if(url==='/index'){
        return true
      }
      return false
    }
  }
  // match代表访问路径为/admin 才走adminauth中间件
  config.adminauth = {
    match: "/admin"
 };

  return {
    ...config,
    ...userConfig,
  };
};
