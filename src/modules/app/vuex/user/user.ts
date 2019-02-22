/**
 * @Author: jrucker
 * @Description
 * @Date: 2019/2/22 11:25
 * @Last Modified by: jrucker
 * @Last Modified time: 2019/2/22 11:25
 */

export interface State {
  adminInfo: {
    token: string;
    admin_name: string;
    admin_id: string;
  }
}

const initState: State = {
  adminInfo: {
    token: '',
    admin_name: '',
    admin_id: ''
  }
};

const getters = {
  getAdminInfo: (state: State) => state.adminInfo,
};

const actions = {};

const mutations = {
  saveAdminInfo: (state: State, data: { token: string, admin_name: string, admin_id: string }) => {
    state.adminInfo.token = data.token;
    state.adminInfo.admin_name = data.admin_name;
    state.adminInfo.admin_id = data.admin_id;

    window.sessionStorage.setItem('token', data.token);
    window.sessionStorage.setItem('admin_name', data.admin_name);
    window.sessionStorage.setItem('admin_id', data.admin_id);
  },
  logout: (state: State) => {
    state.adminInfo.token = '';
    state.adminInfo.admin_name = '';
    state.adminInfo.admin_id = '';

    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('admin_name');
    window.sessionStorage.removeItem('admin_id');

    // 恢复默认样式
    let themeLink: any = document.querySelector('link[name="theme"]');
    themeLink.setAttribute('href', '');
    // 清空打开的页面等数据，但是保存主题数据
    let theme = '';
    if (localStorage.theme) {
      theme = localStorage.theme;
    }
    localStorage.clear();
    if (theme) {
      localStorage.theme = theme;
    }
  }
};

export default {
  state: initState,
  getters,
  actions,
  mutations
}
