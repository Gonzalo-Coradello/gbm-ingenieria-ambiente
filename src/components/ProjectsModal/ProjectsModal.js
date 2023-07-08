import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ProjectsModal = ({ show, handleClose, imagen }) => {
  return (
    <Modal
      className="custom-modal"
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      size={window.innerWidth > 700 ? "lg" : "xl"}
    >
      <Modal.Header closeButton>
        <Modal.Title>{imagen?.alt}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex justify-content-center">
        <img src={imagen?.src} alt={imagen?.alt} />
      </Modal.Body>
    </Modal>
  );
};
