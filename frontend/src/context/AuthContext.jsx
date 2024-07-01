import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
  // HOOOKS
  const [user, setUser] = useState(null);

  // COOKIES
  const auth = Cookies.get('jwToken') || null;

  // EFECTOS
  useEffect(() => {
    if (auth) {
      const decoded = jwtDecode(auth);
      setUser({
        id: decoded.usuario._id,
        email: decoded.usuario.email,
        alias: decoded.usuario.alias,
      });
    }
  }, []);

  // FUNCIONES
  const logoutUser = function () {
    setUser(null);
    Cookies.remove('jwToken');
  };

  //
  return (
    <AuthContext.Provider value={{ user, setUser, auth, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
