import React from 'react'
import Icon from 'components/IconMap'

const AccountLogin = ({Input,FormItem}) => {
  return (
    <>
    <FormItem>
      <Input placeholder='请输入用户名' prefix={Icon.userIcon}/>
    </FormItem>
    <FormItem>
      <Input placeholder='请输入密码' prefix={Icon.passwordIcon}/>
    </FormItem>
    </>
  )
}

export default AccountLogin
