import React from 'react'
import {selectLayout} from "util/selectLayout"
import LoginLayout from './LoginLayout'
import BaseLayout from './BaseLayout'

const index = ({children,location}) => {
    const layoutMap = {BaseLayout,LoginLayout};
    const Container = layoutMap[selectLayout(location.pathname)];
  return (
    <Container>
      {children}
    </Container>
  )
}

export default index
