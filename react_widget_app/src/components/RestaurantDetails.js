import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import photo from '../assets/img/Old_Jerusalem_Nafura_Restaurant_courtyard.jpg'

export default function RestaurantDetails(restaurant, key) {
  const [image, setImage] = useState("");
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.restaurant.photos[0].photo_reference}&key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws`
      );
      console.log(response)
  };

  return (
    <div key={restaurant.restaurant.name} className="card-restaurant">
      <div>{restaurant.restaurant.name}</div>
      <div className="card-photo"><img src={photo}/></div>
      <div>{restaurant.restaurant.vicinity}</div>
    </div>
  );
}
