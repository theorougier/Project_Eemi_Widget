import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import useRestaurantInformations from "./hooks/useRestaurantInformations";

function App() {
  const {searchParams, restaurants} = useRestaurantInformations()
  console.log(localStorage.getItem('address'))
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            restaurants={restaurants}
            adresse={localStorage.getItem("address")}
          />
        }
      />
    </Routes>
  );
}

export default App;
