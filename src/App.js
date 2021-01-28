import logo from './logo.svg';
import './App.css';
import { Layout, Menu, PageHeader, Input, DatePicker, Button } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Historial</Menu.Item>
        <Menu.Item key="2">Agregar campo</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '15px 50px' }}>
      <PageHeader
      title="Ganancia neta">
        <div className="site-layout-content">No hay campos! Por favor crea uno</div>
      </PageHeader>
    </Content>
    <Content style={{ padding: '15px 50px' }}>
      <PageHeader title="Ganancia disponible">
        <div className="site-layout-content">No hay campos! Por favor crea uno</div>
      </PageHeader>
    </Content>
    <Content style={{ padding: '15px 50px' }}>
      <PageHeader title="Gastos">
        <div className="site-layout-content">No hay campos! Por favor crea uno</div>
      </PageHeader>
    </Content>
    <Content style={{ padding: '15px 50px' }}>
      <PageHeader title="Resultados">
        <div className="site-layout-content">
          <Input type="number"></Input>
          <DatePicker onChange={(date, dateString) => console.log(date, dateString)} />
          <p>Total Neto: 0</p>
          <p>Total Disponible: 0</p>
          <Button>Calcular</Button>
          <Button>Guardar</Button>
        </div>
      </PageHeader>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Creado por Rodrigo Urban 2020</Footer>
  </Layout>
  );
}

export default App;
