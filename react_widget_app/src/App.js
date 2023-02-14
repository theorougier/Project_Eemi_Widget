import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import useRestaurantInformations from "./hooks/useRestaurantInformations";

function App() {
  const {searchParams, restaurants} = useRestaurantInformations()
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            restaurants={restaurants}
            adresse={searchParams.get("adresse")}
          />
        }
      />
    </Routes>
  );
}

export default App;
