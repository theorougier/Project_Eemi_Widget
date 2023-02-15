import axios from "axios";
import React, { useEffect } from "react";

export default function WheatherInformation() {
    useEffect(() => {
        const response = axios.get('https://weatherapi-com.p.rapidapi.com/future.json?q=', {
            headers: {
                'X-RapidAPI-Key': '4d1a9358cemsh407dc858d87acfdp144eafjsnbfb0df2cef06',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
              }
        })
        
    }, [])
    return (
        <div>
            
        </div>
    )
}