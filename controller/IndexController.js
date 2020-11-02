/**
 * @file        : IndexController.js
 * @description : 项目首页controller
 * @author      : YanXianPing
 * @creatTime   : 2020/10/29 20:03
 */
const BaseController = require('../controller/BaseController');

class IndexController extends BaseController {
    constructor(req, res, next) {
        super(req, res, next);
    }

    /**-----------------------------------------------
     *                   渲染页面
     *----------------------------------------------*/
    async main() {
        this.res.render('index', {helloWorld: '欢迎来到express项目模板'})
    }

    /**-----------------------------------------------
     *                  页面ajax
     *----------------------------------------------*/

    async ajaxHelloWorld() {

    }

}

module.exports = {
    IndexController
};
