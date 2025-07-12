// src/components/Message.jsx
import React from 'react';
import { Typography } from '@mui/material';

function Message({ numeroUsuario, numeroSecreto }) {
  let mensaje = '';

  if (numeroUsuario === '') {
    mensaje = 'Ingresa un número del 1 al 100';
  } else if (parseInt(numeroUsuario) === numeroSecreto) {
    mensaje = '¡Correcto!';
  } else if (parseInt(numeroUsuario) < numeroSecreto) {
    mensaje = 'El número es mayor';
  } else if (parseInt(numeroUsuario) > numeroSecreto) {
    mensaje = 'El número es menor';
  }

  const color = mensaje === '¡Correcto!' ? 'success.main' : '#b929ad';

  return (
    <Typography
      variant="h6"
      align="center"
      color={color}
      sx={{ mt: 2 }}
    >
      {mensaje}
    </Typography>
  );
}

export default Message;
