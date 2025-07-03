import '../styles/tarjeta.css';

function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Lisbeth Nohemi Jimenez Lopez";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div className="tarjeta-container">
      <div className="tarjeta">
        <h2>{nombre}</h2>
        <h4>{profesion}</h4>
        <p>{mensaje}</p>

        <div className="tarjeta-info">
          <p>📧 lj5072354@gmail.com</p>
          <p>🌐 www.portafolio.dev</p>
          <p>📞 +52 000 000 0000</p>
          <p>🧑‍💻 github.com/jimloxc9912</p>
          <p className="tecnologias">HTML | CSS | JavaScript | React</p>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
