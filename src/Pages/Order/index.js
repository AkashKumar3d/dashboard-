import { Space, Typography, Table } from "antd"
import React, { useState, useEffect } from "react";
import { getoreder } from "../../API";

export default function Inventory() {
  const [loading, setloading] = useState(false);
  const [myproducts, setmyporducts] = useState([]);

  useEffect(() => {
    setloading(true);
    getoreder()
      .then((res) => {
        setmyporducts(res.products);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <>
     
      <Space size={20} direction="vertical">
      <Typography.Title level={3}>Orders</Typography.Title>
        <Table style={{width:1200}} size={10}
          columns={ [ 
            {
              key:"id",
              title:"Id",
              dataIndex:"id"
             },
            {
              key:"title",
              title:"Title",
              dataIndex:"title"
             },
             {
              key:"quantity",
              title:"Quantity",
              dataIndex:"quantity"
             },
             {
              key:"price",
              title:"Price",
              dataIndex:"price",
              render:(value)=>{
                return <span>${value}</span>
              }
             },
             {
              key:"discountPercentage",
              title:"Discount",
              dataIndex:"discountPercentage",
              render:(value)=>{
                return <span>${value}%</span>
              }
             },
] }
loading={loading}
dataSource={myproducts}
// pagination={false}
 > </Table>
      </Space>
    </>
  );
}
