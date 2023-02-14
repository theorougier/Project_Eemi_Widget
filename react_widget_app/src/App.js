import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import SearchBar from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import axios, { isCancel, AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";

function App() {
  const [location, setLocation] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("adresse");

  useEffect(() => {
    const fetchData = async () => {
      // Geocode the address
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${searchParams.get(
          "adresse"
        )}&key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws`
      );
      const data = response.data;

      if (data.status === "OK") {
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;

        setLocation({ lat, lng });

        // Find restaurants near the location
        const placesResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=restaurant&key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws`
        );
        const placesData = placesResponse.data;
        setRestaurants(placesData.results);
      }
    };

    fetchData();
  }, []);
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
