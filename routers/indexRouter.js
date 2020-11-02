/**
 * @file        : indexRouter.js
 * @description : 项目首页router
 * @author      : YanXianPing
 * @creatTime   : 2020/10/29 20:25
 */
const express = require('express');
const router = express.Router();
/**-----------------------------------------------
 *           import router's controller
 *----------------------------------------------*/
const {IndexController} = require('../controller/IndexController');

/**-----------------------------------------------
 *                 init routers
 *----------------------------------------------*/
router.get('/', (req, res, next) => {
    new IndexController(req, res, next).main();
});

router.get('/ajaxHelloWorld', (req, res, next) => {
    new IndexController(req, res, next).ajaxHelloWorld()
});

module.exports = {
    IndexRouter: router
};
