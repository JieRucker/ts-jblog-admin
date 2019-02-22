/**
 * @Author: jrucker
 * @Description
 * @Date: 2019/2/22 11:25
 * @Last Modified by: jrucker
 * @Last Modified time: 2019/2/22 11:25
 */

import {otherRouter, appRouter} from '../../router/router';

export interface State {
  isFullScreen: boolean;
  openedSubmenuArr: object[];
  menuTheme: string;
  themeColor: string;
  currentPath: object[];
  menuList: object[];
  activeMenuItem: string | null;
  routers: object[];
}

const initState: State = {
  isFullScreen: false,
  openedSubmenuArr: [], // 要展开的菜单数组
  menuTheme: 'dark', // 主题
  themeColor: '',
  currentPath: [], // 面包屑数组
  menuList: [],
  activeMenuItem: null, /*活动菜单*/
  routers: [
    otherRouter,
    ...appRouter
  ]
};

// getters
const getters = {
  isFullScreen: (state: State) => state.isFullScreen,
};

/// actions
const actions = {};

// mutations
const mutations = {
  updateMenulist(state: State) {
    let list: object[] = [];
    appRouter.forEach((item, index) => {
      list.push(item);
      if (!item.children) return;
      let len = list.length;
      let childrenArr = item.children.filter(child => child);

      if (childrenArr === undefined || !childrenArr.length) {
        list.splice(len - 1, 1);
      } else {
        let handledItem = JSON.parse(JSON.stringify(list[len - 1]));
        handledItem.children = childrenArr;
        list.splice(len - 1, 1, handledItem);
      }
    });

    state.menuList = list;
  },
  changeMenuTheme(state: State, theme: string) {
    state.menuTheme = theme;
  },
  changeMainTheme(state: State, mainTheme: string) {
    state.themeColor = mainTheme;
  },
  addOpenSubmenu(state: State, name: object[]) {
    [...name].forEach(m => {
      state.openedSubmenuArr.push(m)
    })
  },
  setCurrentPath(state: State, pathArr: object[]) {
    state.currentPath = pathArr;
  },
  setActiveMenuItem(state: State, obj: { data: { node: { activeMenuItem: string } }, name: string }) {
    state.activeMenuItem = obj.data.node.activeMenuItem || obj.name;
  }
};

export default {
  state: initState,
  getters,
  actions,
  mutations
}
