import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSlider from "../components/AdminComponents/MenuSlider";
import { GithubOutlined } from "@ant-design/icons";

import "./layoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  // Se especifican los componentes que queremos obtener del layout
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  return (
    <Layout className="layout-admin">
      <Header className="layout-admin__header">
        <MenuTop
          menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed}
        />
      </Header>

      <Layout>
        <MenuSlider menuCollapsed={menuCollapsed} />
        <Content className="layout-admin__content">{children}</Content>
      </Layout>
      <Footer className="layout-admin__footer">
        <GithubOutlined style={{ fontSize: "17px" }}></GithubOutlined>Erika
        Proyect React
      </Footer>
    </Layout>
  );
}
