import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSlider from "../components/AdminComponents/MenuSlider";
import { GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/Admin/SignIn/SignIn";
import useAuth from "../hooks/useAuth";

import "./layoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  // Se especifican los componentes que queremos obtener del layout
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    return (
      <Layout className="layout-admin">
        <MenuSlider menuCollapsed={menuCollapsed}></MenuSlider>
        <Layout
          className="layout-admin"
          // style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <>
            <SignIn />
            <Routes>
              <Route path="/admin/login" element={<SignIn></SignIn>}></Route>
            </Routes>
          </>
          <Footer className="layout-admin__footer">
            <GithubOutlined style={{ fontSize: "17px" }}></GithubOutlined>Erika
            Proyect React
          </Footer>
        </Layout>
      </Layout>
    );
  }

  if (user && !isLoading) {
    return (
      <Layout className="layout-admin">
        <MenuSlider menuCollapsed={menuCollapsed}></MenuSlider>
        <Layout
          className="layout-admin"
          // style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">{children}</Content>
          <Footer className="layout-admin__footer">
            <GithubOutlined style={{ fontSize: "17px" }}></GithubOutlined>Erika
            Proyect React
          </Footer>
        </Layout>
      </Layout>
    );
  }

  return null;
}
