import { useState } from "react";
import "../styles/bitacora.css";

function Bitacora({ planetas, onEliminar, onEditar }) {
  const [planetaActivo, setPlanetaActivo] = useState(null);

  const toggleDetalle = (index) => {
    setPlanetaActivo(planetaActivo === index ? null : index);
  };

  return (
    <div className="bitacora">
      <h2>Bitácora de Exploración</h2>
      {planetas.map((planeta, i) => {
        const estaActivo = planetaActivo === i;

        return (
          <div
            key={i}
            className={`planeta-item ${estaActivo ? "activo" : ""}`}
            onClick={() => toggleDetalle(i)}
          >
          <div className={`planeta-resumen ${estaActivo ? "activo" : ""}`}>
            {planeta.imagen && (
                <img
                
                alt={planeta.nombre}
                src={planeta.imagen}
                className={`imagen ${estaActivo ? "imagen-detalle" : "miniatura"}`}
                />
            )}
            <h3>{planeta.nombre}</h3>
            </div>

            {estaActivo && (
              <div className="planeta-detalle">
                <div className="detalle-contenido">
                  <div className="texto-detalle">
                    <p>{planeta.descripcion}</p>
                    <div className="botones">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditar(i);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        className="btn-eliminar"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEliminar(i);
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Bitacora;