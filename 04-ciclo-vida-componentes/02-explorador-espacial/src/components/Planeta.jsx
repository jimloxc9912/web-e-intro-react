// components/Planeta.jsx
function Planeta({ nombre, descripcion, imagen }) {
  return (
    <div className="planeta">
      <h3>{nombre}</h3>
      {descripcion && <p>{descripcion}</p>}
      {imagen && <img src={imagen} alt={nombre} width="100" />}
    </div>
  );
}

export default Planeta;
