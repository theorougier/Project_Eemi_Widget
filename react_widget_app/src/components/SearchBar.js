import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({defaultAdresse}) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  function handleClick() {
    navigate("/?adresse=" + address);
    window.location.reload(false)
  }

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
