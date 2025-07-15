import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './index.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#322e69',
    },
    secondary: {
      main: '#b929ad',
    },
    background: {
      default: '#f7f9fc',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
