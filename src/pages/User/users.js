import React from 'react'
import UserForm  from '../../components/userForm'
import { Layout } from "antd";
import Sider from "../../components/Sider";
import Footer from "../../components/Footer";
const Users = () => {
  return (
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
          <UserForm />
        </Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  )
}

export default Users