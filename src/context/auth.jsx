import { createContext, useState } from 'react';
import { logIn } from '../Services/login';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(sessionStorage.getItem('jwt'));
  const [isAuthenticated, setAuthenticated] = useState(token);

  const signIn = async (user) => {
    try {
      await logIn(user); // Ejecuta la función de inicio de sesión
      const jwt = sessionStorage.getItem('jwt'); // Obtén el token de sessionStorage
      if (jwt) {
        setToken(jwt); // Actualiza el estado del token
        setAuthenticated(true); // Autenticación exitosa
      }
    } catch (error) {
      console.error('Login failed', error); // Manejo de error en inicio de sesión
      setAuthenticated(false); // Autenticación fallida
    }
  };

  const logOut = () => {
    setAuthenticated(false);
    setToken(null);
    sessionStorage.removeItem('jwt');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, setAuthenticated, signIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}