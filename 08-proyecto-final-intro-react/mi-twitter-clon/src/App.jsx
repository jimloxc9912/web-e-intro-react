import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { AuthProvider, useAuth } from "./context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <AppBar position="static" elevation={1} sx={{ bgcolor: "#fff", color: "#333" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Twitter Clon
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ color: "#1DA1F2" }}>
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/profile" sx={{ color: "#1DA1F2" }}>
          Perfil
        </Button>
        {isAuthenticated ? (
          <Button color="inherit" onClick={logout} sx={{ color: "#e0245e" }}>
            Cerrar sesión
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login" sx={{ color: "#1DA1F2" }}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};


function App() {
  return (
    <Router> {/* ← Mover Router aquí arriba */}
      <AuthProvider> {/* ← Ahora useNavigate tiene acceso a Router */}
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}


export default App;
