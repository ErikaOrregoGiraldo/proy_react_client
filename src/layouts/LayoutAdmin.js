import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props) {
  const { children } = props;
  // Se especifican los componentes que queremos obtener del layout
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menú</h2>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>React project 2022</Footer>
      </Layout>
    </Layout>
  );
}
