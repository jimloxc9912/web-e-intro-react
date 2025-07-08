import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const user = {
        nombre: "pepe",
        correo: "pepe@pepe",
        tema: "ligth"
    }

  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}