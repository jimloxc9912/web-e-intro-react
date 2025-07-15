import { Typography, Paper } from '@mui/material';

function NotFound() {
  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h5" gutterBottom color="error">
        Página no encontrada
      </Typography>
      <Typography>
        Lo sentimos, la ruta que estás buscando no existe.
      </Typography>
    </Paper>
  );
}

export default NotFound;