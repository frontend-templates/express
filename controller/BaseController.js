/**
 * @file        : BaseController.js
 * @description : controller的基类
 * @author      : YanXianPing
 * @creatTime   : 2020/10/29 19:58
 */

class BaseController {
    constructor(req, res, next) {
        // express的请求对象
        this.req = req;
        // express的响应对象
        this.res = res;
        // express的next方法
        this.next = next;
    }

    /**-----------------------------------------------
     *                   渲染错误
     *----------------------------------------------*/
    /**
     * 渲染错误页面
     * @param code <number> 需要渲染的错误码
     */
    resErrorPage(code, data = {errorCode: '', data: {}, msg: ''}) {
        switch (code) {
            case /^4/:
                this.res.render('error/4--', data);
                break;
            case /^5/:
                this.res.render('error/5--', data);
                break;
            default :
                this.res.render('error/default', data);
                break;
        }
    }

    /**
     * 渲染错误ajax请求
     * @param data <Object> 需要响应的json
     */
    resErrorJson(data = {errorCode: '', data: {}, msg: ''}) {
        this.res.json(data);
    }
}

module.exports = BaseController;
