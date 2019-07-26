import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'
export default function EpisodeList() {
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/`).then(res => {
      const episode =  res.data.results
      console.log("r&M data:", res.data.results);
      // KEY PART, SAVE TO STATE:
    //   setEpisode(episode);
    });
  }, []);

  return <section className='episode-list grid-view'>
    {episode.map(res => {
      // console.log(res)
      return(
        <EpisodeCard 
       
        />
      )
    })}
    </section>

}
