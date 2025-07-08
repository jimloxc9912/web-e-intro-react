import { useContext } from "react"
import { UserContext } from "./assets/context/UserContext"
import { CambiarFondo } from "./assets/components/CambiarFondo"

export const App = () => {

  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>Información del usuario</h1>
      <ul>
        <li>Nombre: {user.nombre}</li>
        <li>Tema: {user.tema}</li>
        <li>Correo: {user.correo}</li>
      </ul>
      <CambiarFondo />
    </div>
  )
}




/* import { useState } from "react"
import { CambiarFondo } from "./assets/components/CambiarFondo"

export const App = () => {

  const [mostrar, setMostrar] = useState(false)


  return (
    <div>
      <button
        onClick={() => setMostrar( prev => !prev )}
      >
        {mostrar ? "Ocultar fondo" : "Mostrar fondo"}
      </button>
      { mostrar && <CambiarFondo /> }
      
    </div>
  )
}
 */