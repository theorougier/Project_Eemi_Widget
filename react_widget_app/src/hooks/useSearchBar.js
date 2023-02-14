import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function useSearchBar() {
    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    function handleClick() {
      navigate("/?adresse=" + address);
      window.location.reload(false)
    }

    return {
        address,
        setAddress,
        navigate,
        handleClick,
    }
}