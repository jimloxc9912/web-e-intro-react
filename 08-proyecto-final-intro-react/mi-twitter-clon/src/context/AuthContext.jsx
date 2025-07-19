import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    const storedUser = localStorage.getItem("user");
    if (stored && storedUser) {
      setIsAuthenticated(JSON.parse(stored));
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /*const login = (username, password, callback) => {
    if (username === "admin" && password === "1234") {
      setIsAuthenticated(true);
      setUser({ username });
      localStorage.setItem("auth", true);
      localStorage.setItem("user", JSON.stringify({ username }));
      callback();
    } else {
      alert("Credenciales inválidas");
    }
  };*/
  const login = (username, password, callback) => {
        setIsAuthenticated(true);
        setUser({ username });
        callback();
    }

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
