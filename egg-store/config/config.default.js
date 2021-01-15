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
  config.middleware = ['auth'];

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


  return {
    ...config,
    ...userConfig,
  };
};
