import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import photo from '../assets/img/Old_Jerusalem_Nafura_Restaurant_courtyard.jpg'

export default function RestaurantDetails(restaurant) {
  const data = restaurant
  return (
    <div key={restaurant.restaurant.name} className="card-restaurant">
      <div><h2>{restaurant.restaurant.name}</h2></div>
      <div className="card-photo"><img src={photo}/></div>
      <div><span>{restaurant.restaurant.vicinity}</span></div>
      <div className="card-informations">
        <div>note {restaurant.restaurant.rating}/5</div>
        <div>{restaurant.restaurant.user_ratings_total} votes</div>
      </div>
    </div>
  );
}
