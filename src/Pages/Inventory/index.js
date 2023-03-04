import { Space, Typography, Table, Rate } from "antd";
import Avatar from "antd/es/avatar/avatar";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getproduct } from "../../API";

export default function Inventory() {
  const [loading, setloading] = useState(false);
  const [myproducts, setmyporducts] = useState([]);

  useEffect(() => {
    setloading(true);
    getproduct()
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
      <Typography.Title level={3}>Inventory</Typography.Title>
        <Table style={{width:1200}} size={10}
          columns={ [ 
            {
              key:"thumbnail",
              title:"Thumbnail",
              dataIndex:"thumbnail",
              render:(Link)=>{
                return <Avatar src={Link}></Avatar>
              }
             },
            {
              key:"title",
              title:"Title",
              dataIndex:"title"
             },
             {
              key:"description",
              title:"Description",
              dataIndex:"description"
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
              key:"rating",
              title:"Rating",
              dataIndex:"rating",
              render:(rating)=>{
                return <Rate value={rating} allowHalf></Rate>
              }
             },
             {
              key:"stock",
              title:"Stock",
              dataIndex:"stock"
             },
             {
              key:"brand",
              title:"Brand",
              dataIndex:"brand"
             },
             {
              key:"category",
              title:"Category",
              dataIndex:"category"
             },
] }
loading={loading}
dataSource={myproducts}
pagination={{
  pageSize:5
}
}
// column={columns}
 ></Table>
      </Space>
    </>
  );
}
