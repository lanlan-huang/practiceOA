import React from 'react'
import Icon from "components/IconMap"
import {Button} from "antd"

const SmCodeLogin = ({FormItem,Input}) => {
  return (
    <>
      <FormItem>
        <Input placeholder='请输入手机号码' prefix={Icon.mobileIcon} />
      </FormItem>
      <FormItem>
        <Input placeholder='请输入验证码' prefix={Icon.codeIcon} addonAfter={<Button>发送验证码</Button>}/>
      </FormItem>
    </>
  )
}

export default SmCodeLogin
