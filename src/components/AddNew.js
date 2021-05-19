import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Button,
} from "react-bootstrap";

const AddNew = (props) => {
  return (
    <>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Agregar nuevo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Nombre del campo"
          aria-label="Nombre del campo"
          aria-describedby="basic-addon2"
        />
        <FormControl
          placeholder="Valor"
          aria-label="Valor"
          aria-describedby="basic-addon2"
          type="number"
        />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Tipo"
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#">Ingreso</Dropdown.Item>
          <Dropdown.Item href="#">Gasto</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Append>
          <Button variant="outline-secondary">Agregar</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

AddNew.propTypes = {};

export default AddNew;
