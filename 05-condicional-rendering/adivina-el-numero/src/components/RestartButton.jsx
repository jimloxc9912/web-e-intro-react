import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';

function RestartButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      startIcon={<ReplayIcon />}
      sx={{ marginTop: '1rem' }}
    >
      Reiniciar Juego
    </Button>
  );
}

export default RestartButton;
