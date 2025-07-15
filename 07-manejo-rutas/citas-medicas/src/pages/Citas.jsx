import { Link } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const citas = [
  { id: 1, paciente: 'Juan Pérez', fecha: '2025-07-14' },
  { id: 2, paciente: 'María López', fecha: '2025-07-15' },
];

function Citas() {
  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Listado de Citas
      </Typography>
      <List>
        {citas.map((cita) => (
          <ListItem
            key={cita.id}
            button
            component={Link}
            to={`/cita/${cita.id}`}
            sx={{ '&:hover': { backgroundColor: '#f3f3f3' } }}
          >
            <ListItemText primary={`${cita.paciente} - ${cita.fecha}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Citas;