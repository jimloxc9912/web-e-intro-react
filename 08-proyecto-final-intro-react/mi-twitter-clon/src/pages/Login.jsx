import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, () => navigate("/"));
  };

  return (
    <Box
  sx={{
    maxWidth: 400,
    mx: "auto",
    mt: 8,
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: "#fff",
  }}
>
  <Typography variant="h5" sx={{ mb: 3, color: "#1DA1F2", fontWeight: 600 }}>
    Iniciar Sesión
  </Typography>
  <form onSubmit={handleSubmit}>
    <TextField
      label="Nombre de usuario"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      fullWidth
      required
      sx={{ mb: 2 }}
    />
    <TextField
      label="Contraseña"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth
      required
      sx={{ mb: 3 }}
    />
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{ bgcolor: "#1DA1F2", ":hover": { bgcolor: "#1A91DA" } }}
    >
      Entrar
    </Button>
  </form>
</Box>

  );
};

export default Login;