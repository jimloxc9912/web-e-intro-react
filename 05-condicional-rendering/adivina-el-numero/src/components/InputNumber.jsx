import TextField from '@mui/material/TextField';

function InputNumber({ valor, setValor, deshabilitado, setIntentos }) {
  const manejarCambio = (e) => {
    setValor(e.target.value);
    setIntentos(prev => prev + 1);
  };

  return (
    <TextField
      label="Tu número"
      type="number"
      variant="outlined"
      value={valor}
      onChange={manejarCambio}
      disabled={deshabilitado}
      fullWidth
      sx={{ maxWidth: 300, margin: '1rem auto' }}
    />
  );
}

export default InputNumber;
