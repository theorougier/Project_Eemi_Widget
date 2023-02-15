import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function useSearchBar() {
    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    // function handleClick(e) {
    //   console.log(address)
    //   navigate("/?adresse=" + address);
    // }

    return {
        address,
        setAddress,
        navigate,
    }
}