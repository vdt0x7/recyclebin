import React from "react";
import { columns, dataset } from "../../constants/columns";
import { Table,Layout } from "antd";
import "./dashboard.css";
import Sider from "../../components/Sider";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
    <Layout>
    <Sider/>
      <Layout className="site-layout">
        <Layout.Content
          className="site-layout-content"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 780,
          }}
        >
          <Table dataSource={dataset} columns={columns}></Table>
        </Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  </div>
  )
}

export default Dashboard;
