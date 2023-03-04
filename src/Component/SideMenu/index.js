import { Menu } from 'antd'
import {AppstoreOutlined,ShopOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import React from 'react'

export default function SideMenu() {
  const navigate=useNavigate()
  return (
    <div className='SideMenu' style={{height:"100%"}}>
      <Menu
      style={{height:627}}
      mode='vertical'
      onClick={(items)=>{
         navigate(items.key)
      }}
      items={[
        {
          label:"Dashbord",
          icon:<AppstoreOutlined/>,
          key:"/"
      },
      {
        label:"Inventory",
        icon:<ShopOutlined/>,
        key:"/inventory"
      },
      {
        label:"Order",
        icon:<ShoppingCartOutlined/>,
        key:"/order"
      },
      {
        label:"Customer",
        icon:<UserOutlined/>,
        key:"/customer"
      }
    ]}
      />
    </div>
  )
}
