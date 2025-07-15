import { Link } from 'react-router-dom';

const citas = [
  { id: 1, paciente: 'Juan Pérez', fecha: '2025-07-14' },
  { id: 2, paciente: 'María López', fecha: '2025-07-15' },
];

function Citas() {
  return (
    <div>
      <h2>Listado de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              {cita.paciente} - {cita.fecha}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;