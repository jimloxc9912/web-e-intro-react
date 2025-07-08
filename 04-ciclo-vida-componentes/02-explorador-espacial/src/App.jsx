import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';
import FormularioRegistro from './components/FormularioRegistro';
import Bitacora from './components/Bitacora'; // <-- Importar
import './styles/formulario.css';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");

  // Carga inicial desde localStorage o arreglo vacío
  const [planetasVisitados, setPlanetasVisitados] = useState(() => {
    const datosGuardados = localStorage.getItem("planetas");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);
  const [indiceEdicion, setIndiceEdicion] = useState(null);

  useEffect(() => {
    const vuelo = setInterval(() => {
      setCombustible((prev) => Math.max(prev - 1, 0));
      setDistancia((prev) => prev + 100);
    }, 1000);
    return () => clearInterval(vuelo);
  }, []);

  const mensajeEstado = useMemo(() => {
    return `Estado de la nave: ${estadoNave}`;
  }, [estadoNave]);

  // Guardar en localStorage cada vez que planetasVisitados cambia
  useEffect(() => {
    localStorage.setItem("planetas", JSON.stringify(planetasVisitados));
  }, [planetasVisitados]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    setMostrarFormulario(true);
    setPlanetaSeleccionado(null);
    setIndiceEdicion(null);
  };

  const guardarPlaneta = (planeta) => {
    if (indiceEdicion !== null) {
      const copia = [...planetasVisitados];
      copia[indiceEdicion] = planeta;
      setPlanetasVisitados(copia);
    } else {
      setPlanetasVisitados([...planetasVisitados, planeta]);
    }
    setMostrarFormulario(false);
    setEstadoNave("En órbita");
  };

  const cancelarRegistro = () => {
    setMostrarFormulario(false);
    setEstadoNave("En órbita");
  };

  const eliminarPlaneta = (indice) => {
    const nuevaLista = planetasVisitados.filter((_, i) => i !== indice);
    setPlanetasVisitados(nuevaLista);
  };

  const editarPlaneta = (indice) => {
    setPlanetaSeleccionado(planetasVisitados[indice]);
    setIndiceEdicion(indice);
    setMostrarFormulario(true);
    setEstadoNave("Aterrizando");
  };

  return (
    <div className="panel">
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar}>Aterrizar</button>

      {mostrarFormulario && (
        <div className="modal-fondo">
          <FormularioRegistro
            onGuardar={guardarPlaneta}
            onCancelar={cancelarRegistro}
            datosIniciales={planetaSeleccionado}
          />
        </div>
      )}

      <Bitacora
        planetas={planetasVisitados}
        onEliminar={eliminarPlaneta}
        onEditar={editarPlaneta}
      />
    </div>
  );
}

export default App;
