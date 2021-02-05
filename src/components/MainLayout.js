import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  InputNumber,
  PageHeader,
  DatePicker,
  Layout,
} from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;

const MainLayout = (params) => {
  const [netEarnings, setNetEarnings] = useState([]);
  const [grossEarnings, setGrossEarnings] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addField = (values, field, type, lastList) => {
    console.log(values, field, type, lastList);
    if (field.length >= 3) {
      let earnings = [...lastList];
      earnings.push(values);
      switch (type) {
        case 0:
          //Net Earning
          console.log("Net");
          setNetEarnings(earnings);
          break;
        case 1:
          //Gross Earning
          console.log("gross");

          setGrossEarnings(earnings);
          break;
        case 2:
          //expenses
          console.log("expenses");

          setExpenses(earnings);
          break;
      }
    }
  };

  const removeField = (type, lastList, index) => {
    console.log("holis", lastList, index);
    const newList = [...lastList];
    newList.splice(index, 1);
    switch (type) {
      case 0:
        //Net Earning
        console.log("Net");
        setNetEarnings(newList);
        break;
      case 1:
        //Gross Earning
        console.log("gross");

        setGrossEarnings(newList);
        break;
      case 2:
        //expenses
        console.log("expenses");

        setExpenses(newList);
        break;
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form>
      <Content style={{ padding: "15px 50px" }}>
        <PageHeader title="Ganancia neta">
          <div className="site-layout-content">
            {netEarnings.map((field, index) => (
              <Form.Item key={index}>
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    name={field}
                    fieldKey={index}
                    rules={[{ required: true, message: `Missing ${field}` }]}
                    label={field}
                  >
                    <InputNumber />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => removeField(0, netEarnings, index)}
                  />
                </Space>
              </Form.Item>
            ))}
            <div layout="inline">
              <Form.Item
                name="netField
                "
                label="Nombre del campo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() =>
                    addField("holavalues", "campo copado", 0, netEarnings)
                  }
                >
                  Agregar
                </Button>
              </Form.Item>
            </div>
          </div>
        </PageHeader>
      </Content>
      <Content style={{ padding: "15px 50px" }}>
        <PageHeader title="Ganancia disponible">
          <div className="site-layout-content">
            {grossEarnings.map((field, index) => (
              <Form.Item key={index}>
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    name={field}
                    fieldKey={index}
                    rules={[{ required: true, message: `Missing ${field}` }]}
                    label={field}
                  >
                    <InputNumber />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => removeField(1, grossEarnings, index)}
                  />
                </Space>
              </Form.Item>
            ))}
            <div layout="inline">
              <Form.Item
                name="grossField"
                label="Nombre del campo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() =>
                    addField("asdasdd", "campo copado", 1, grossEarnings)
                  }
                >
                  Agregar
                </Button>
              </Form.Item>
            </div>
          </div>
        </PageHeader>
      </Content>
      <Content style={{ padding: "15px 50px" }}>
        <PageHeader title="Gastos">
          <div className="site-layout-content">
            {expenses.map((field, index) => (
              <Form.Item key={index}>
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    name={field}
                    fieldKey={index}
                    rules={[{ required: true, message: `Missing ${field}` }]}
                    label={field}
                  >
                    <InputNumber />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => removeField(2, expenses, index)}
                  />
                </Space>
              </Form.Item>
            ))}
            <div layout="inline">
              <Form.Item
                name="expensesField"
                label="Nombre del campo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() =>
                    addField("cambiar", "campo copado", 2, expenses)
                  }
                >
                  Agregar
                </Button>
              </Form.Item>
            </div>
          </div>
        </PageHeader>
      </Content>
      <Content style={{ padding: "15px 50px" }}>
        <PageHeader title="Resultados">
          <div className="site-layout-content">
            <Input type="number"></Input>
            <DatePicker
              onChange={(date, dateString) => console.log(date, dateString)}
            />
            <p>Total Neto: 0</p>
            <p>Total Disponible: 0</p>
            <Button>Calcular</Button>
            <Button>Guardar</Button>
          </div>
        </PageHeader>
      </Content>
      <Form onFinish={onFinish}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar
          </Button>
        </Form.Item>
      </Form>
    </Form>
  );
};

export default MainLayout;
