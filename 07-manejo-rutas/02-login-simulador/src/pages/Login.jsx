import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


export const Login = () => {

    const {login} = useAuth()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        //Llamamos a login y redireccionamos al perfil
        login( () => {
            navigate("/user/123")
        } )
    }

    return (
        <>
            <div>Login</div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Usuario" required/>
                <input type="password" placeholder="Contraseña" required/>
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}