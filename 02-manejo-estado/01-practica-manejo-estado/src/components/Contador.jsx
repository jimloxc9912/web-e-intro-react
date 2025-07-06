import { useState } from "react";

export const Contador = () => {

    const [contador, setContador] = useState(0);
    // otra de forma de crear funciones
    const reset =  () => setContador(0);



    return(
        <>
        <div style={{ textAlign: "center" }}>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador + 1)}>Increment</button>
        <button onClick={() => setContador(contador - 1)}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
        </>
        
    )
}