import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


export const ProtectedRoute = ({children}) => {

    const {isAutenticated} = useAuth()

  return isAutenticated ? children : <Navigate to="/login" />
}
