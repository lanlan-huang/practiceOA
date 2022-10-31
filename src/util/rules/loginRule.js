export const loginRule = {
  userRules: [{
      require: true,
      message: '账户名不能为空'
    },
    {
      max: 10,
      message: '用户名长度不正确'
    },
    {
      min: 4,
      message: '用户名长度不正确'
    }
  ],
  passwordRules: [{
      require: true,
      message: '密码不能为空'
    },
    {
      max: 10,
      message: '密码长度不正确'
    },
    {
      min: 4,
      message: '密码长度不正确'
    }
  ],
  mobileRules: [{
    // rule：验证规则，val：当前输入的值，callback：验证的回调
    validator: (rule, val) => {
      const mobileReg = /^1[3|4|5|7|8|][0-9]\d{8}$/;
      switch (true) {
        case !Boolean(val):
          return Promise.reject('手机号码不能为空');
        case !mobileReg.test(val):
          return Promise.reject('手机号码输入格式错误');
        default:
          return Promise.resolve();
      }
    }
  }],
  codeRules: [{
    require: true,
    message: '验证码不能为空'
  },
  {
    max: 6,
    message: '验证码长度不正确'
  },
  {
    min: 5,
    message: '验证码长度不正确'
  }
],
}
