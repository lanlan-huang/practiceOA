import React, { useState } from 'react'
import AccountLogin from './component/AccountLogin'
import SmCodeLogin from './component/SmCodeLogin'
import Icon from "components/IconMap"
import logoImg from "common/img/logo.svg"
import "./css/login.less"

import { Form, Input, Button, Row, Col } from "antd";
const FormItem = Form.Item;
const login = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(1); //判断使用那个组件

  // 选择容器函数
  const ComponentSelector = props => type == '0' ? <SmCodeLogin {...props} /> : <AccountLogin {...props} />
  // 提交事件
  const submitUserInfo = (data) => {
    console.log(data, 'data');
  }
  return (
    <div className="form">
      <div className="logo">
        <img src={logoImg} alt="logo" />
        <span>织信人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {ComponentSelector({ form, FormItem, Input })}
        <Row>
          <Button type='primary' block>登录</Button>
        </Row>
        <Row className='ft-12'>
          <Col span={6}>忘记密码</Col>
          <Col span={18} className='align-right' onClick={() => setType(!type ? 1 : 0)}>
            {type == '0' ? '使用账户名密码登录' : '使用手机号进行登录'}
            {Icon.arrRowRight}
          </Col>
        </Row>
      </Form>

    </div>
  )
}

export default login
