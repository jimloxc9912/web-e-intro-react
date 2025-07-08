// components/FormularioPlaneta.jsx
import { useState, useEffect } from 'react';
import '../styles/formulario.css';

function FormularioRegistro({ onGuardar, onCancelar }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!imagen) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(imagen);
    setPreview(objectUrl);

    // Evitar fugas de memoria
    return () => URL.revokeObjectURL(objectUrl);
  }, [imagen]);

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: preview, // usamos el preview generado
    };
    onGuardar(nuevoPlaneta);
  };

  return (
    <form onSubmit={manejarSubmit} className="formulario-planeta">
      <h2>Registrar Planeta</h2>
      <input
        type="text"
        placeholder="Nombre del planeta"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagen(e.target.files[0])}
      />

      {preview && (
        <div className="preview-contenedor">
          <p>Previsualización:</p>
          <img src={preview} alt="Previsualización" className="preview-imagen" />
        </div>
      )}

      <button type="submit">Guardar</button>
      <button type="button" className="cancelar" onClick={onCancelar}>Cancelar</button>
    </form>
  );
}

export default FormularioRegistro;
