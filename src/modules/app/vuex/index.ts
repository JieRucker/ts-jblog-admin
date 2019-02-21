/**
 * Created by wbt on 2018/2/20.
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

