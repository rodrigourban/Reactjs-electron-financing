import React, { useState } from "react";
import AddNew from "./AddNew";
import { Form, Col, Button } from "react-bootstrap";

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
    <div>
      <h1>Home Financing</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bn Gaston</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Bn Credito</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Bn Sam</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bn Erick</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Bn Tongas</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Sc Gaston</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Sc Sam</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Bcmr Gaston</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bnmx Sam</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bnmx Tongas</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cash</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>USD</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Cambio</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Otros</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Amex</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Prestamos</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Otros</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mercado</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Motos</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>
        </Form.Row>

        <Button>Calcular</Button>
        <Button>Guardar</Button>
      </Form>
    </div>
  );
};

export default MainLayout;
