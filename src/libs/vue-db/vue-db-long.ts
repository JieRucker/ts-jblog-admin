/**
 * Created by JRucker on 2018/1/21.
 */

// TODO
class VueDB {
  constructor() {
  }

  setItem(key: any, value: any) {
    if (typeof value === 'object')
      value = JSON.stringify(value);

    if (window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  }

  removeItem(key: any) {
    if (window.localStorage) {
      window.localStorage.removeItem(key);
    }
  }

  getItem(key: any) {
    let now: any = '';
    if (window.localStorage) {
      now = window.localStorage.getItem(key);
    }

    return {
      toString() {
        return now;
      },
      toJson() {
        let tryObj: object | null = {};
        try {
          tryObj = JSON.parse(now)
        } catch (e) {
          tryObj = null;
        }
        return tryObj;
      },
      toNumber() {
        return parseFloat(now);
      }
    }

  }

  getItemOnce(key: any) {
    let now: any = this.getItem(key);
    this.removeItem(key);
    return {
      toString() {
        return now;
      },
      toJson() {
        let tryObj: object | null = {};
        try {
          tryObj = JSON.parse(now)
        } catch (e) {
          tryObj = null;
        }
        return tryObj;
      },
      toNumber() {
        return parseFloat(now);
      }
    }
  }
}


export default VueDB;
