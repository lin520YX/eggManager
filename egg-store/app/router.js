'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //  路由当中获取中间件
  var auth=app.middleware.auth({title:'this is router.js  middleware'})
  const { router, controller } = app;
  router.get('/', auth,controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/news',controller.news.index);
};
