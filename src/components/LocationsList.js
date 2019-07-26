import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LocationsList() {
    const [ilocation, setLocation] = useState([])

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        // const location =  res
        console.log("location data:", res);
        // KEY PART, SAVE TO STATE:
        // setLocation(ilocation);
      });
    }, []);
}
