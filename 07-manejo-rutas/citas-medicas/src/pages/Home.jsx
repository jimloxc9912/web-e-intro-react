import { Typography, Paper } from '@mui/material';

function Home() {
  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Plataforma de Citas Médicas
      </Typography>
      <Typography>
        Gestiona tus citas de manera rápida y eficiente.
      </Typography>
    </Paper>
  );
}

export default Home;
