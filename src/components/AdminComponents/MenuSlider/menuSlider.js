import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./menuSlider.scss";

export default function MenuSlider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-slider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/admin"]}>
        <Menu.Item key="1">
          <Link to={"/"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin/menu-web"}>
            <MenuOutlined />
            <span className="nav-text">Web Menu</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={"/admin/login"}>
            <UserOutlined />
            <span className="nav-text">Registrarse</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
