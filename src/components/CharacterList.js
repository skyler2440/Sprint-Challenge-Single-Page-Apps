import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(res => {
      const character = res.data.results;
      console.log("r&M data:", res.data);
      // KEY PART, SAVE TO STATE:
      setCharacter(character);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      {character.map(res => {
        // console.log(res)
        return (
          <CharacterCard
            key={res.id}
            name={res.name}
            image={res.image}
            species={res.species}
            status={res.status}
            location={res.location}
            origin={res.origin.name}
          />
        );
      })}
    </section>
  );
}
