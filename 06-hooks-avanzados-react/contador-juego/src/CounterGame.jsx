import { useReducer, useRef, useCallback, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Stack, Divider } from '@mui/material';

const initialState = {
  count: 0,
  history: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`]
      };
    case 'decrement':
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`]
      };
    case 'incrementBy':
      return {
        count: state.count + action.payload,
        history: [...state.history, `+${action.payload} (Nuevo valor: ${state.count + action.payload})`]
      };
    case 'reset':
      return initialState;
    case 'undo': {
      if (state.history.length === 0) return state;
      const newHistory = [...state.history];
      newHistory.pop();
      const lastEntry = newHistory[newHistory.length - 1];
      const match = lastEntry?.match(/Nuevo valor: (-?\d+)/);
      const restoredCount = match ? parseInt(match[1]) : 0;
      return {
        count: restoredCount,
        history: newHistory
      };
    }
    case 'loadFromStorage':
      return {
        count: action.payload.count,
        history: action.payload.history
      };
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(1);
  const incrementBtnRef = useRef(null);

  useEffect(() => {
    incrementBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('contadorHistory', JSON.stringify(state.history));
  }, [state.history]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('contadorHistory'));
    if (savedHistory && savedHistory.length > 0) {
      const lastEntry = savedHistory[savedHistory.length - 1];
      const match = lastEntry.match(/Nuevo valor: (-?\d+)/);
      const restoredCount = match ? parseInt(match[1]) : 0;
      dispatch({ type: 'loadFromStorage', payload: { count: restoredCount, history: savedHistory } });
    }
  }, []);

  const handleIncrement = useCallback(() => dispatch({ type: 'increment' }), []);
  const handleDecrement = useCallback(() => dispatch({ type: 'decrement' }), []);
  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);
  const handleUndo = useCallback(() => dispatch({ type: 'undo' }), []);
  const handleIncrementBy = useCallback(() => {
    if (!isNaN(inputValue)) {
      dispatch({ type: 'incrementBy', payload: inputValue });
    }
  }, [inputValue]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f7f9fc',
        padding: 2,
      }}
    >
      <Paper sx={{ padding: 4, maxWidth: 500, width: '100%', borderRadius: 3, bgcolor: '#fff', border: '1px solid #ddd', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }} elevation={10}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" sx={{ color: '#ad21a2ff' }}> Contador Juego</Typography>
          <Typography variant="h5" sx={{ color: '#322e69' }}>Valor actual: {state.count}</Typography>

          <Stack direction="row" spacing={2}>
            <Button ref={incrementBtnRef} variant="contained" onClick={handleIncrement} sx={{ bgcolor: '#322e69', '&:hover': { bgcolor: '#271e55' } }}>
              +1
            </Button>
            <Button variant="contained" onClick={handleDecrement} sx={{ bgcolor: '#b929ad', '&:hover': { bgcolor: '#a02199' } }}>
              -1
            </Button>
            <Button variant="contained" onClick={handleUndo} sx={{ bgcolor: '#c65ee6ff', '&:hover': { bgcolor: '#7a3174ff' } }}>
              Deshacer
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              type="number"
              label="Incrementar por"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value) || 0)}
              sx={{ backgroundColor: '#f7f9fc' }}
            />
            <Button variant="outlined" onClick={handleIncrementBy} sx={{ borderColor: '#b929ad', color: '#b929ad', '&:hover': { bgcolor: '#b929ad', color: '#fff' } }}>Sumar</Button>
          </Stack>

          <Button onClick={handleReset} variant="outlined" sx={{ borderColor: '#322e69', color: '#322e69', '&:hover': { bgcolor: '#322e69', color: '#fff' } }}>
            Reiniciar
          </Button>

          <Divider sx={{ width: '100%', my: 2 }} />

          <Typography variant="h6" sx={{ color: '#322e69' }}>Historial:</Typography>
          <Box
            component="ul"
            sx={{
              maxHeight: 200,
              overflowY: 'auto',
              width: '100%',
              paddingLeft: 2,
              color: '#666'
            }}
          >
            {state.history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default CounterGame;
