import React, { useState, useEffect, createContext } from "react";
import {
  getAccessToken,
  getRefreshToken,
  refreshAccessToken,
  logout,
} from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  console.log(props);
  const { children } = props;
  const [user, setUser] = useState({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    checkUserLogin(setUser);
  }, []);

  // Devolvemos la página web a App.js
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

const checkUserLogin = (setUser) => {
  console.log("Cheking if Erika is login");
  const accessToken = getAccessToken();

  // Validamos si el token es válido o nulo

  if (!accessToken) {
    const refreshToken = getRefreshToken();
    // Validamos si el token caduco o expiro
    if (!refreshToken) {
      // Si hay algo en el local storage lo eliminamos
      logout();
      setUser({
        user: null,
        isLoading: false,
      });
    } else {
      refreshAccessToken(refreshToken);
    }
  } else {
    // Validamos si el accessToken es válido
    setUser({
      user: jwtDecode(accessToken),
      isLoading: false,
    });
  }
};
