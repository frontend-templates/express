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

    // TODO 校验是否登录
    // TODO 渲染错误页面
    // TODO 响应错误json
}

module.exports = BaseController;
