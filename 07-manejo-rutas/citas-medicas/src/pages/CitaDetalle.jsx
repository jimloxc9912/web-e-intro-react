import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';

function CitaDetalle() {
  const { id } = useParams();
  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Detalles de la Cita
      </Typography>
      <Typography>ID de la cita: {id}</Typography>
    </Paper>
  );
}

export default CitaDetalle;