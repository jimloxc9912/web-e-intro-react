import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtro, setFiltro] = useState('');

  // useMemo para calcular el tiempo total
  const tiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // useEffect para actualizar el título
  useEffect(() => {
    document.title = `Total: ${tiempoTotal} minutos`;
  }, [tiempoTotal]);

  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nueva = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion),
      };
      setTareas([...tareas, nueva]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  const tareasFiltradas = tareas.filter((t) => {
    return filtro === '' || t.duracion >= parseInt(filtro);
  });

  return (
    <div className="tarjeta-container">
      <div className="tarjeta">
        <h1>Contador de Tareas</h1>

        <div className="formulario">
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <input
            type="number"
            placeholder="Duración"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
          <button onClick={agregarTarea}>Agregar</button>
        </div>

        <div className="filtro">
          <input
            type="number"
            placeholder="Filtrar por duración mínima"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        <h2>Tareas</h2>
        <ul>
          {tareasFiltradas.map((tarea, i) => (
            <li key={i}>
              {tarea.nombre}: {tarea.duracion} min
            </li>
          ))}
        </ul>

        <h3>Total de tiempo: {tiempoTotal} minutos</h3>
      </div>
    </div>
  );
}

export default App;
