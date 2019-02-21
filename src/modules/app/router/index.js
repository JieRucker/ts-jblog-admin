import Vue from 'vue';
// import iView from 'iview';
import VueRouter from 'vue-router';
import { routers } from './router';
import { user } from '../vuex';
Vue.use(VueRouter);
// 路由配置
var RouterConfig = {
    // mode: 'history',
    routes: routers
};
export var router = new VueRouter(RouterConfig);
router.beforeEach(function (to, from, next) {
    //获取store里面的token
    var token = user.state.adminInfo.token;
    //判断要去的路由有没有requiresAuth
    if (to.meta.requiresAuth) {
        if (token) {
            // iView.LoadingBar.start();
            next();
        }
        else {
            next({
                path: '/login',
            });
        }
    }
    else {
        next();
    }
});
router.afterEach(function (to) {
    // iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
//# sourceMappingURL=index.js.map