import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "2rem" }}>
      <Typography variant="h3" sx={{ color: "#b929ad", mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Página no encontrada
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        La ruta que estás buscando no existe o ha sido movida.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ bgcolor: "#322e69" }}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;