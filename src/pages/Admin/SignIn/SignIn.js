import React from "react";
import { Layout, Tabs } from "antd";
import Login from "../../../components/AdminComponents/LogIn";
import Register from "../../../components/AdminComponents/Register";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout>
      <Content>
        <Tabs type="card">
          <TabPane tab={<span>Iniciar Sesión</span>} key="1">
            <Login></Login>
          </TabPane>
          <TabPane tab={<span>Resgistro</span>} key="2">
            Hola
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
}
