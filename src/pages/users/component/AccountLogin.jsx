import React from 'react'
import Icon from 'components/IconMap'
import { loginRule } from 'util/rules'

const AccountLogin = ({Input,FormItem}) => {
  return (
    <>
    <FormItem name='accountName' rules={loginRule.userRules} hasFeedback>
      <Input placeholder='请输入用户名' prefix={Icon.userIcon}/>
    </FormItem>
    <FormItem name='password' rules={loginRule.passwordRules} hasFeedback>
      <Input placeholder='请输入密码' prefix={Icon.passwordIcon} type='password'/>
    </FormItem>
    </>
  )
}

export default AccountLogin
