import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const Profile = () => {
  const { logout, user } = useAuth();
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h5">Perfil de usuario {id || user?.username}</Typography>
      <Button onClick={logout} sx={{ mt: 2 }} variant="outlined">
        Cerrar sesión
      </Button>
    </div>
  );
};

export default Profile;
