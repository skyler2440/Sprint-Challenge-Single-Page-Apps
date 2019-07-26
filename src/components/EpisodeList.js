import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/`).then(res => {
      const episode = res.data.results;
      console.log("episode data:", res.data.results);
      // KEY PART, SAVE TO STATE:
      setEpisode(episode);
    });
  }, []);

  return (
    <section className="episode-list grid-view">
      {episode.map(res => {
        // console.log(res)
        return (
          <EpisodeCard
            key={res.id}
            name={res.name}
            airDate={res.air_date}
            episode={res.episode}
            characters={res.characters}
          />
        );
      })}
    </section>
  );
}
