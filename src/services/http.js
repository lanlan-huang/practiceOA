import {
  qs
} from "qs"; //处理get请求的相关参数
import {
  messsage
} from "antd";
import {
  history
} from "umi";
const fetch = require('dva').fetch;

// 响应状态处理函数
const checkStatus = res => {
  // 响应大于等于200小于300，成功
  if (200 >= res.status < 300) {
    return res;
  }
  messsage.console.error(`网络请求错误.${res.status}`);
  throw error(res?.statusText);
}

// 判断本次请求内容是否成功
const judgeOkState = async res => {
  const cloneRes = await res?.clone().json();
  if (cloneRes.code !== 0) {
    messsage.console.error(`${cloneRes.msg}${cloneRes?.code}`);
    //  跳转登录界面
    history.replace('/users/login');
    // 清空本地保存数据
    sessionStorage.clear();
  }
  return res;
}

// 错误处理
const handleError = error => {
  if (error instanceof TypeError) {
    messsage.error(`网络请求失败${error}`);
  }
  return {
    code: -1,
    data: false,
  }
}

class Http {
  static async staticFetch(url = '', options = {}) {
    // 对url做统一处理
    url = "/api" + url;
    const defaultOptions = {
      model: 'cors', //以cors的形式进行跨域
      headers: {
        Authorization: sessionStorage.get('token') || null,
      }
    }
    if (options.method === 'POST' || options.method == 'PUT') {
      defaultOptions.headers['Content-Type'] = 'application/json;charset=utf-8';
    }

    // 合并options选项
    const newOptions = [...defaultOptions, ...options];
    return fetch(url, newOptions)
      .then(checkStatus) //网络处理:拦截
      .then(judgeOkState) //请求处理
      .then(res => {
        // 获取响应头的token
        const token = res?.headers.get('Authorization');
        token && sessionStorage?.set('token', token); //获取token且存到sessionStorage
        return res.json();
      })
      .catch(handleError)
  }

  // post请求处理
  post(url, params = {}, option = {}) {
    const options = Object.assign({
      method: 'POST',
      option
    });
    options.body = JSON.stringify(params);
    return Http.staticFetch(url, option)
  };
  // put请求
  put(url, params = {}, option = {}) {
    const options = Object.assign({
      method: 'PUT',
      option
    });
    options.body = JSON.stringify(params);
    return Http.staticFetch(url, option)
  };
  // get请求
  get(url, params = {}, option = {}) {
    const options = Object.assign({
      method: 'GET',
      option
    });
    Object.keys(option) && (url += '?' + qs.stringify(option))
    return Http.staticFetch(url, options)
  };
  // delete请求
  delete(url, option = {}) {
    const options = Object.assign({
      method: 'Delete',
      option
    });
    Object.keys(option) && (url += '?' + qs.stringify(option))
    return Http.staticFetch(url, options)
  };
}

const resFun = new Http();
export default resFun;
