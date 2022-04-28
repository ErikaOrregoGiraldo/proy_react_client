import React from "react";
import { Layout } from "antd";
export default function LayoutBasic(props) {
  const { children } = props;
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
