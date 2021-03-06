/**
 * @file        : app.js
 * @description : 程序入口文件
 * @author      : YanXianPing
 * @creatTime   : 2020/10/29 16:07
 */

/**-----------------------------------------------
 *                    express
 *----------------------------------------------*/
const express = require('express');
/**-----------------------------------------------
 *                  node modules
 *----------------------------------------------*/
const path = require('path');
const util = require('util');
/**-----------------------------------------------
 *                 市面上第三方依赖
 *----------------------------------------------*/
const compression = require('compression');

/**-----------------------------------------------
 *                 公司规范的npm包
 *----------------------------------------------*/
const tplHb = require('@npm-node/tplhb');
const hbHelpers = require('@npm-node/hbhelpers');
// TODO logger记录日志npm包
// TODO sentry哨兵npm包

/**-----------------------------------------------
 *                    routers
 *----------------------------------------------*/
const {IndexRouter} = require('./routers/indexRouter');

/**-----------------------------------------------
 *                   appConfig
 *----------------------------------------------*/
const {appName} = require('./app.config');
/**-----------------------------------------------
 *                   业务代码
 *----------------------------------------------*/
const app = express();

// compress all response，即开启gzip（Content-Encoding: gzip）
app.use(compression());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (start) : 静态资源服务器

// (end)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (start) : 设置模板
tplHb(app, {
    viewsPath: path.resolve(__dirname, 'views'),
    helpers: hbHelpers,
    partialsDirectoryName: 'partials',
    getTemplateFromCache: true
});
// 默认模板引擎
app.set('view engine', 'hb');
// (end)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (start) : 路由
app.use(`/${appName}/`, IndexRouter);
// (end)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (start) : 心跳检测
app.get(/heartbeat$/, (req, res, next) => {
    res.send(`[${new Date().toLocaleString()}] project (${appName}) heartbeat is alive`);
});
// (end)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (start) : 最后的中间件兜底，当请求走到这一步肯定是有问题的~~~

// (end)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

module.exports = app;
