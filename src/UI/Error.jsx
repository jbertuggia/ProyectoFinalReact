import React from 'react';
import { Alert } from 'react-bootstrap';
const Error = ({ message, onClose }) => {
  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      <Alert.Heading>Error 404, página no encontrada ⛔🤷🏼‍♂️❔</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default Error;