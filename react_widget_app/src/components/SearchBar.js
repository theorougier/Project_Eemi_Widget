import React, {useState} from 'react';
import useSearchBar from '../hooks/useSearchBar';

const SearchBar = ({defaultAdresse}) => {
  const {handleClick,address, setAddress} = useSearchBar()
  return (
    <div className='search-bar'>
      <input
        type="text"
        value={address}
        placeholder={defaultAdresse}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleClick}>Valider</button>
    </div>
  );
};

export default SearchBar;
