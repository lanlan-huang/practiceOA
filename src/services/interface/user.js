// 引入封装好的fetch方法
import ajax from "../http.js"

// 用户登录
export default userLogin = params => ajax.post('/login',params);
