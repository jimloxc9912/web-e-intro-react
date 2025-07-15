//1. Crear el contexto
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

//3. Hook personalizado
export function useAuth() {
    return useContext(AuthContext)
}

//2. Crear el proveedor del contexto
export function AuthProvider({children}){

    const [isAutenticated, setIsAutenticated] = useState(false)

    const login = (callback) => {
        setIsAutenticated(true)
        callback()
    }

    const logout = () => {
        setIsAutenticated(false)
    }


    return (
        <AuthContext.Provider value={{isAutenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}