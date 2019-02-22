/**
 * @Author: jrucker
 * @Description
 * @Date: 2019/2/22 11:25
 * @Last Modified by: jrucker
 * @Last Modified time: 2019/2/22 11:25
 */

import Vue from 'vue';
import * as Vuex from 'vuex';

import app from './app/app';
import user from './user/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user
  }
});

export {
  app,
  user
};

export default store;

