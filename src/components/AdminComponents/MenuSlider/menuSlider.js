import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";
import "./menuSlider.scss";

export default function MenuSlider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const location = useLocation();

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark "
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <TeamOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/subjects">
          <Link to={"/admin/subjects"}>
            <BookOutlined />
            <span className="nav-text">Asignaturas</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
