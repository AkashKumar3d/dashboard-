import { Badge, Drawer, Image, List, Space, Typography } from 'antd'
import {MailOutlined, BellOutlined} from '@ant-design/icons';
import React, { useState ,   useEffect} from 'react'
import { getcomment, getoreder } from '../../API';

export default function AppHader() {
const [comment, setcomment]=useState([])
const [order, setorder]=useState([])
const [commentsopen, setcommentsopen]=useState(false)
const [Notification, setNotification]=useState(false)

  useEffect(() => {
   getcomment().then((res)=>{
      setcomment(res.comments)
    })
 
    getoreder().then((res)=>{
      setorder(res.products)
    })
  }, [])
  
  return (
    <div className='AppHader'>
      <Image width={35} src="https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png"/>
      <Typography.Title>Warehousing Dashbord</Typography.Title>
      <Space>
        <Badge count={comment.length} >
        <MailOutlined style={{fontSize:20}} onClick={()=>{
             setcommentsopen(true)
        }}
          />
        </Badge>
        <Badge count={order.length} >
        <BellOutlined style={{fontSize:20}} onClick={()=>{
             setNotification(true)
        }}/>
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentsopen} onClose={()=>{
        setcommentsopen(false)
      }} maskClosable > 
      <List dataSource={comment} renderItem={(items)=>{
       return <List.Item>{items.body}</List.Item>
      }}></List>
      </Drawer> 
      <Drawer title="Notification" open={Notification} onClose={()=>{
        setNotification(false)
      }} maskClosable > <List dataSource={order} renderItem={(items)=>{
        return <List.Item><Typography.Paragraph strong>{items.title}</Typography.Paragraph>has been recorded</List.Item>
       }}></List> </Drawer>
    </div>
  )
}
