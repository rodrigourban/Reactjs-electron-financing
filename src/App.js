import "./App.css";
import { Layout, Menu } from "antd";
import MainLayout from "./components/MainLayout";

const { Header, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Historial</Menu.Item>
        </Menu>
      </Header>
      <MainLayout />
      <Footer style={{ textAlign: "center" }}>
        Creado por Rodrigo Urban 2020
      </Footer>
    </Layout>
  );
}

export default App;
