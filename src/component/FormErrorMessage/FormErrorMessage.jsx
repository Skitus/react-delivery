import React from 'react';
import './FormErrorMessage.scss';

const FormErrorMessage = ({ message }) => (message ? <span className="error-message">{message}</span> : '');

export default FormErrorMessage;