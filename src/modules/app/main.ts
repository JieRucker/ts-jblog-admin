// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import {router} from './router';
import store from './vuex';
import App from './App.vue';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import wyboot from '../../libs/wyboot';
import api from '../../api/server';
import JsEncrypt from 'jsencrypt';
import jDynamic from '../../components/j-dynamic';

Vue.use(VueI18n);
Vue.use(iView);

Vue.prototype.$api = api;
Vue.prototype.$Global = wyboot;
Vue.prototype.$jsEncrypt = JsEncrypt;
Vue.prototype.$jDynamic = jDynamic;

const app: Vue = new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  mounted() {
    // 菜单过滤
    this.$store.commit('updateMenulist');
  }
});

export default app

/*interface T {
  a: boolean
}

let obj: T = {
  a: true
};

let x = (<any>obj).a;*/

/*interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}
//编译后是没有interface这东西的

class Clock implements ClockInterface  {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}*/

/*class Point {
  constructor(public x: number, public y: number) {
  }

  public toString() {
    return "x=" + this.x + " y=" + this.y;
  }
}

class ColoredPoint extends Point {
  constructor(x: number, y: number, public color: string) {
    super(x, y);
  }

  public toString() {
    return super.toString() + " color=" + this.color;
  }

  //static声明静态函数，不加static默认是实例函数
  static f() {
  }
}*/

/*泛型*/
/*class Pair<T1, T2> {
  constructor(public item1: T1, public item2: T2) {
  }

  public toString() {
    return "Pair" + this.item1.toString() + this.item2.toString();
  }
}*/

// console.log(new Point(1, 2).toString());
// console.log(new ColoredPoint(1, 2, 'blue').toString());
// console.log(new Pair(new Point(1, 2), new ColoredPoint(1, 2, 'blue')).toString());

// compile
/*var Pair = (function () {
  function Pair(item1, item2) {
    this.item1 = item1;
    this.item2 = item2;
  }
  Pair.prototype.toString = function () {
    return "Pair" + this.item1.toString() + this.item2.toString();
  };
  return Pair;
})();*/

/*命名空间*/
/*namespace A {
  export class X {
    s: string = 'test'
  }
}
namespace B {
  import Y = A;    // Alias for namespace A
  import Z = A.X;  // Alias for type and value A.X
  export var K = 2;

  export function f() {
    var x = new Z();
  }
}*/

/*function getLength(something: string | number): number {
  return (<string>something).length;
}*/
