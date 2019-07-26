import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'
export default function LocationsList() {
    const [location, setLocation] = useState([])

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        const location =  res.data.results
        console.log("location data:", location);
        // KEY PART, SAVE TO STATE:
        setLocation(location);
      });
    }, []);
    return <section className='location-list grid-view'>
    {location.map(res => {
      // console.log(res)
      return(
        <LocationCard 
        key = {res.id}
        name = {res.name}
        type= {res.type}
        dimension= {res.demension}
        residents = {res.residents}
        />
      )
    })}
    </section>

}
