import React from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import RestaurantList from "../components/RestaurantList";

const ListRestaurants = ({restaurants, adresse}) => {
  return (
    <div>
      <Title/>
      <SearchBar defaultAdresse={adresse}/>
      <RestaurantList restaurants={restaurants}/>
    </div>
  );
};

export default ListRestaurants; 