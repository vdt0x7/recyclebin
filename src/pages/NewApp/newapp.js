import React from 'react'
import { Layout } from "antd";
import {FormList} from "../../components/Form";
import Sider from "../../components/Sider";
import Footer from "../../components/Footer";

const Newapp = () => {
  return (
    <div className="newapp">
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
            <FormList/>
          </Layout.Content>
          <Footer/>
        </Layout>
      </Layout>
      
    </div>
  )
}

export default Newapp

