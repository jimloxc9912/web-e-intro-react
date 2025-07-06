import { useState } from "react";

/*import { Contador } from "./components/Contador"
import Mensaje from "./components/Mensaje"
import { TarjetaUsuario } from "./components/TarjetaUsuario"

*/

function App() {
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const agregarUser = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, usuario]);
    console.log("Agregando...");
    console.log(usuarios);
    setUsuario("");
  };

  const eliminarUser = (indice) => {
    const nuevosUsuarios = usuarios.filter((usuario, index) => {
      return index !== indice;
    });
    setUsuarios(nuevosUsuarios);
  };

  return (
    /*<>
    <h1>Hola react</h1>
    <Mensaje texto="Hola react desde prop" color="red"/>
    <TarjetaUsuario nombre="Pedro" edad="21" ocupacion="Diseñador"/>
    <Contador />
    </>*/
    <>
      <form>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <button type="submit" onClick={agregarUser}>
          Registrar
        </button>
      </form>
      <ul>
        {usuarios.map((user, index) => {
          return (
            <li key={index}>
              {user}
              <button onClick={() => eliminarUser(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
