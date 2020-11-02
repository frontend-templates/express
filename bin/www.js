/**
 * @file        : www.js
 * @description : 启动项目入口
 * @author      : YanXianPing
 * @creatTime   : 2020/10/29 20:43
 */
const http = require('http');
const app = require('../app');


http.createServer(app).listen(4000);
