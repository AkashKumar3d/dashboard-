import { Typography } from 'antd'
import React from 'react'

export default function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href='8318393949'>+91 8318393949</Typography.Link>
      <Typography.Link href='https://en.wikipedia.org/wiki/Privacy_policy' target={'_blank'}>Privacy Police</Typography.Link>
      <Typography.Link href='https://www.astartingpoint.com/static/tos.htm' target={'_blank'}>Terms Of Use</Typography.Link>
    </div>
  )
}
