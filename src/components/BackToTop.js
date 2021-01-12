import React from 'react'

import {BackTop} from 'antd'
import {ArrowUpOutlined} from '@ant-design/icons'


const BackToTop = () => (
  <BackTop>
    <div 
      style={{height: "50px", width: "50px", borderRadius: "5px",
      display:"flex", justifyContent:"center", alignItems:"center",
      backgroundColor: 'rgb(53, 122, 196)', color: 'white'}}
    >
      <ArrowUpOutlined style={{color:"white", fontSize: "25px"}}/>
    </div>
  </BackTop>
)

export default BackToTop
