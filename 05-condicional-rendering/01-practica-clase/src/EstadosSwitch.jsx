import { useState } from "react"
import { WelcomeMessage } from "./components/WelcomeMessage"
import { StatusMessage } from "./components/StatusMessage"


export const EstadosSwitch = () => {

  const [status, setStatus] = useState()

  function onSetLoading(){
    setStatus( "loadings" )
  }
  function onSetError(){
    setStatus( "error" )
  }

  return (
    <>
      <button onClick={onSetLoading}>Iniciar Carga</button> 
      <button onClick={ () => setStatus("success") }>Forzar Éxito</button> 
      <button onClick={onSetError}>Forzar Error</button>

      <StatusMessage status={status}/>


    </>
  )
}