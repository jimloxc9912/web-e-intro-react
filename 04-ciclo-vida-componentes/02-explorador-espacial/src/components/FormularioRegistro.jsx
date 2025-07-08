// components/FormularioPlaneta.jsx
import { useState, useEffect } from 'react';
import '../styles/formulario.css';

function FormularioRegistro({ onGuardar, onCancelar, datosIniciales }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (datosIniciales) {
      setNombre(datosIniciales.nombre || '');
      setDescripcion(datosIniciales.descripcion || '');
      setPreview(datosIniciales.imagen || null);
    }
  }, [datosIniciales]);

  const manejarImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // base64
        setImagen(reader.result); // base64
      };
      reader.readAsDataURL(file);
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen || preview, // usa base64 ya cargado
    };
    onGuardar(nuevoPlaneta);
  };

  return (
    <form onSubmit={manejarSubmit} className="formulario-planeta">
      <h2>{datosIniciales ? "Editar Planeta" : "Registrar Planeta"}</h2>
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
        onChange={manejarImagenChange}
      />
      {preview && (
        <div className="preview-contenedor">
          <p>Previsualización:</p>
          <img src={preview} alt="Previsualización" className="preview-imagen" />
        </div>
      )}
      <button type="submit" className="guardar">Guardar</button>
      <button type="button" className="cancelar" onClick={onCancelar}>Cancelar</button>
    </form>
  );
}

export default FormularioRegistro;
