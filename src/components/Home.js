import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import holder from "../waves.svg";

const { Body, Img } = Card;
const { Item } = ListGroup;

const Home = (props) => {
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        justifySelf: "space-around",
        border: "1px solid #839496",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          backgroundColor: "#002b36",
          paddingTop: "2rem",
          paddingBottom: "1rem",
          margin: "0",
        }}
      >
        Home Financing
      </h3>
      <Img variant="top" src={holder} style={{}} />
      <Body>
        <ListGroup variant="flush">
          <Item action>Calcular</Item>
          <Item action>Historial</Item>
        </ListGroup>
      </Body>
    </Card>
  );
};

Home.propTypes = {};

export default Home;
