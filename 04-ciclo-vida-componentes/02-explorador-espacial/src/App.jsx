// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';
import FormularioRegistro from './components/FormularioRegistro';
import './styles/formulario.css';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const vuelo = setInterval(() => {
      setCombustible((prev) => Math.max(prev - 1, 0));
      setDistancia((prev) => prev + 100);
    }, 1000);

    return () => {
      clearInterval(vuelo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado de la nave: ${estadoNave}`;
  }, [estadoNave]);

  // Al hacer click en "Aterrizar", abre el formulario modal
  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    setMostrarFormulario(true);
  };

  // Guardar nuevo planeta y cerrar formulario
  const guardarPlaneta = (nuevoPlaneta) => {
    setPlanetasVisitados([...planetasVisitados, nuevoPlaneta]);
    setMostrarFormulario(false);
    setEstadoNave("En órbita");
  };

  // Cancelar registro y cerrar formulario
  const cancelarRegistro = () => {
    setMostrarFormulario(false);
    setEstadoNave("En órbita");
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
          />
        </div>
      )}
      <h2>Planetas Visitados</h2>
      <ul>
        {planetasVisitados.map((planeta, index) => (
          <li key={index}>
            <Planeta 
            nombre={planeta.nombre}
            descripcion={planeta.descripcion}
            imagen={planeta.imagen}

            />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
