import React from 'react'
import greenMan from '@/assets/404.png'
import { Link } from 'react-router-dom'

import './index.less'

const PageNotFound = () => {
  return (
    <div className="nofound-wrapper">
      <img src={greenMan} alt="" className="green-man" />
      <i className="iconfont icon-back" style={{ color: 'green', marginRight: 6 }} />
      <Link to="/">返回首页</Link>
    </div>
  )
}

export default PageNotFound
