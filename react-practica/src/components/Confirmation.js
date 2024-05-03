import React from 'react';
import {
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-react-ui-kit';

const ConfirmationModal = ({ message, onConfirm, onCancel, isOpen }) => {
  return (
    <MDBModal show={isOpen} tabIndex="-1">
      <MDBModalBody>
        <p>{message}</p>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={onCancel}>
          Cancelar
        </MDBBtn>
        <MDBBtn color="primary" onClick={onConfirm}>
          Confirmar
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};
export default ConfirmationModal;
