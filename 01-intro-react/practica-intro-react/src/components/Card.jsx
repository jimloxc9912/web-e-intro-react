

export default function Card({nombre, profesion, description}) {
  return (
   <>
   <div>
    <h2>{nombre}</h2>
    <p>Profesion:{profesion}</p>
    <p>{description}</p>
   </div>
   </>
  )
}
