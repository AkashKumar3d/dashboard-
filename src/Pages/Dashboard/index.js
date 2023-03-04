import { Card, Space, Statistic, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getrevenue, getoreder, getproduct } from "../../API";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

// chart graph : using the library here
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Dashboard() {
 const [Orders, setorders]=useState(0)
 const [inventory, setinventory]=useState(0)
 const [customer, setcustomer]=useState(6)
 const [revenue, setrevenue]=useState(0)

 useEffect(() => {
    getproduct().then(res=>{
      setinventory(res.total)
      setrevenue(res.total) 
      
    })
    
    getoreder().then(res=>{
      setorders(res.total)
    })

    // getrevenue().then(res=>{
    //  setrevenue(res.total) 
    
    // })
    
 }, [])
 
  return (
    <>
      <div>
        <Typography.Title level={3}>Dashboard</Typography.Title>

        <Space direction="horizontal">
          <DashboardCard icon={<ShoppingCartOutlined style={{ color: "green", backgroundColor: "rgba(0,255,0,0.5)",borderRadius: 20, fontSize: 24,padding: 8,}}/>} title={"Orders"} value={Orders} />
          <DashboardCard icon={<ShoppingOutlined style={{color: "purple",backgroundColor: "rgba(0,255,255,0.25)",borderRadius: 20,fontSize: 24,padding: 8,}}/>} title={"Inventory"} value={inventory}/>
          <DashboardCard icon={<UserOutlined style={{color: "blue",backgroundColor: "rgba(0,0,255,0.5)",borderRadius: 20, fontSize: 24, padding: 8,}}/>} title={"Customer"} value={customer}/>
          <DashboardCard icon={<DollarCircleOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8,}}/>} title={"Revenue"} value={revenue}/>
        </Space>

        <Space style={{ display: "flex", margin: "8px" }}>
          <RecentOrder />
          <DashboardChart />
        </Space>
      </div>
    </>
  );
}

 

function DashboardCard({ value, title, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

  // recent order here
const RecentOrder=()=> {
  const [loading, setloading] = useState(false);
  const [DataSource, setDataSource] = useState([]);

  useEffect(() => {
    setloading(true);
    getoreder()
      .then((res) => {
        setDataSource(res.products);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Table
      columns={[
        {
          key:"id",
          title: "Pr Id",
          dataIndex: "id",
        },
        {
          key:"title",
          title: "Title",
          dataIndex: "title",
        },
        {
          key:"quantity",
          title: "Quantity",
          dataIndex: "quantity",
        },
        {
          key:"discountedPrice",
          title: "Price",
          dataIndex: "discountedPrice",
        },
      ]}
      loading={loading}
      dataSource={DataSource}
      pagination={false}
    >
      {/* {console.log(DataSource.length,"my order length")} */}
    </Table>
  );
}

// bar chart code here
function DashboardChart() {
  const [revenueData, setrevenueData] = useState({
    label: [],
    datasets: [],
  });
  
  useEffect(() => {
    // getrevenue()
    getrevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0,1)",
          },
        ],
      };
      setrevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: " Order revenue ",
      },
    },
  };
  return <Card style={{height:340, width:500 }}><Bar options={options} data={revenueData}/></Card>;
}
