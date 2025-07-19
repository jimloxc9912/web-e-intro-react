import { Tweet } from "./Tweet";

export const TweetList = ({ tweets, onLike }) => (
  <div>
    {tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
    ))}
  </div>
);

// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) setIsAuthenticated(JSON.parse(stored));
  }, []);

  const login = (callback) => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", true);
    callback();
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}