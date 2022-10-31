import React, { useState } from 'react'
import Icon from "components/IconMap"
import { Button } from "antd"
import { loginRule } from 'util/rules'

const SmCodeLogin = ({ FormItem, Input, form }) => {
  const [disabled, setDisabled] = useState(true); //是否禁用
  const [currentStatus, setCurrentStatus] = useState(true); //是否改变文字
  let [currentTime, setCurrentTime] = useState(60);

  // 手机号输入是否验证通过
  const checkedMobile = async (val) => {
    try {
      // 获取手机号的验证结果
      const data = await form.validateFields(['phone']);
      setDisabled(false);

    } catch (error) {
      console.log(error);
      setDisabled(true);
    }
  }

  // 手机验证码
  const _sendSmCode = (val) => {
    setDisabled(true);
    setCurrentStatus(false)
    runTime();
  }
  // 倒计时
  const runTime = () => {
    setInterval(() => {
      if (currentTime == 0) {
        clearInterval();
        setDisabled(true);
        setCurrentStatus(false);
        setCurrentTime(60);
        return
      }
      setCurrentTime(--currentTime);
    }, 1000)
  }

  return (
    <>
      <FormItem name='phone' rules={loginRule.mobileRules} hasFeedback>
        <Input placeholder='请输入手机号码' prefix={Icon.mobileIcon} onChange={checkedMobile} />
      </FormItem>
      <FormItem name='code' rules={loginRule.codeRules} hasFeedback>
        <Input placeholder='请输入验证码' prefix={Icon.codeIcon}
          addonAfter={<Button disabled={disabled} onClick={_sendSmCode}>
            {currentStatus ? '发送验证码' : `${currentTime}秒后重新发送`}
          </Button>}
        />
      </FormItem>
    </>
  )
}

export default SmCodeLogin
