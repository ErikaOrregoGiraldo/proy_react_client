import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../src/config/routes";
import "./App.scss";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
