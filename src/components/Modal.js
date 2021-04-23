import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ResultModal = (props) => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Resultados</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="d-flex justify-content-between align-items-center">
          Fecha:<span className="">03/01/1995</span>
        </p>
        <p className="d-flex justify-content-between align-items-center">
          Neto: <span className="">$3000</span>
        </p>
        <p className="d-flex justify-content-between align-items-center">
          Bruto: <span className="">$3000</span>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <button type="button" className="btn btn-outline-secondary">
          Cerrar
        </button>
        <button type="button" className="btn btn-outline-success">
          Guardar
        </button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

ResultModal.propTypes = {};

export default ResultModal;
