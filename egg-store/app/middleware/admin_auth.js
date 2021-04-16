'use strict';
module.exports = (options, app) => {
  return async function auth(ctx, next) {
    if (ctx.session && ctx.session.userinfo) {
      await next();
    } else {
      ctx.redirect('/');
    }
  };
};
