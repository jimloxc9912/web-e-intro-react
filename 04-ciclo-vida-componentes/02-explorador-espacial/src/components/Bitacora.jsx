// components/Bitacora.jsx
function Bitacora({ planetas, onEliminar }) {
  return (
    <div className="bitacora">
      <h2>Bitácora de Planetas</h2>
      {planetas.map((planeta, i) => (
        <div key={i} className="planeta-item">
          <h3>{planeta.nombre}</h3>
          <p>{planeta.descripcion}</p>
          {planeta.imagen && <img src={planeta.imagen} alt={planeta.nombre} width="100" />}
          <button onClick={() => onEliminar(i)}>Eliminar</button>
          {/* Aquí podrías agregar botón de editar */}
        </div>
      ))}
    </div>
  );
}

export default Bitacora;
