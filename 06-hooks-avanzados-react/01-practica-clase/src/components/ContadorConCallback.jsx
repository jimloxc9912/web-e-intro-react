import { useCallback, useState } from 'react';

export function ContadorConCallback() {

  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {

    setCount(prev => prev + 1);

  }, []);

  console.log("Componente renderizado")
  console.log("Incrementar", incrementar)

  return (

    <div>

      <p>Contador App: {count}</p>

      <button onClick={incrementar}>Incrementar</button>

    </div>

  );

}