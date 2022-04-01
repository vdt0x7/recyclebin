import { Menu, Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreFilled,
  InteractionTwoTone,
} from "@ant-design/icons";
import { useState } from "react";
function Sider() {
  const [collapse, setCollapse] = useState(false);

  const handletoggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapse}
      onCollapse={handletoggle}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: "trigger",
          onClick: handletoggle,
        })}
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/dashboard/users">User</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreFilled />}>
          <Link to="/dashboard/application">Application</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<InteractionTwoTone />}>
          <Link to="/dashboard/new-application">New application</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Sider;
