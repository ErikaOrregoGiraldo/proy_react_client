import React from "react";
import { Layout, Tabs } from "antd";
import { Routes, Route } from "react-router-dom";
import Login from "../../../components/AdminComponents/LogIn";
import Register from "../../../components/AdminComponents/Register";
import "./SignIn.scss";
import { getAccessToken } from "../../../api/auth";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessToken()) {
    return (
      <>
        <Routes>
          <Route path="/admin/login"></Route>
        </Routes>
      </>
    );
  }
  return (
    <Layout>
      <Content>
        <Tabs type="card">
          <TabPane tab={<span>Iniciar Sesión</span>} key="1">
            <Login></Login>
          </TabPane>
          <TabPane tab={<span>Resgistro</span>} key="2">
            <Register></Register>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
}
