import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import photo from '../assets/img/Old_Jerusalem_Nafura_Restaurant_courtyard.jpg'

export default function RestaurantDetails(restaurant) {
  const data = restaurant
  const [image, setImage] = useState("");
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.restaurant.photos[0].photo_reference}&key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws`
      );
  };
  return (
    <div key={data.restaurant.name} className="card-restaurant">
      <div><h2>{data.restaurant.name}</h2></div>
      <div className="card-photo"><img src={image}/></div>
      <div><span>{data.restaurant.vicinity}</span></div>
      <div className="card-informations">
        <div>note {data.restaurant.rating}/5</div>
        <div>{data.restaurant.user_ratings_total} votes</div>
      </div>
    </div>
  );
}
