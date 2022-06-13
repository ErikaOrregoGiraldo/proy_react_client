import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../src/config/routes";
import "./App.scss";
import AuthProvider from "./providers/authProvider";

function App() {
  return (
    // Siempre que naveguemos en el sistema se validará si estamos logueados
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component></route.component>
                </route.layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
