import React, { useState } from "react";
import useSearchBar from "../hooks/useSearchBar";

const SearchBar = ({ defaultAdresse }) => {
  const { address, navigate, setAddress } = useSearchBar();
  return (
    <div className="search-bar">
      <div className="search-bar-group-input">
        <input
          type="text"
          value={address}
          placeholder={defaultAdresse}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button onClick={() => localStorage.setItem('address', address)}>Valider</button>
    </div>
  );
};

export default SearchBar;
