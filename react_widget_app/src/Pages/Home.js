import React from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import RestaurantList from "../components/RestaurantList";
import WidgetButton from "../components/WidgetButton";
import WidgetContent from "../components/WidgetContent";

const ListRestaurants = ({restaurants, adresse}) => {
  return (
    <div>
      <Title/>
      <SearchBar defaultAdresse={adresse}/>
      <WidgetButton address={adresse}/>
      <WidgetContent/>
    </div>
  );
};

export default ListRestaurants; 