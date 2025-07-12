import { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';
import {
  Box,
  Paper,
  Typography,
  Stack,
  Divider
} from '@mui/material';

function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [intentos, setIntentos] = useState(0);

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const manejarReinicio = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setNumeroUsuario('');
    setIntentos(0);
  };

  const numero = parseInt(numeroUsuario);
  const acierto = numero === numeroSecreto;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f7f9fc	',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: '100%',
          bgcolor: '#f0f3f8',
          color: '#0b0285ff',
          borderRadius: 4,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Typography variant="h4" component="h1" sx={{ color: '#322e69' }}>
             Adivina el Número
          </Typography>

          <InputNumber
            valor={numeroUsuario}
            setValor={setNumeroUsuario}
            deshabilitado={acierto}
            setIntentos={setIntentos}
          />

          <Message numeroUsuario={numeroUsuario} numeroSecreto={numeroSecreto} />

          {acierto && <RestartButton onClick={manejarReinicio} />}

          <Divider sx={{ bgcolor: '#ccc', width: '100%' }} />

          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#322e69' }}>
            Intentos: {intentos}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Game;
