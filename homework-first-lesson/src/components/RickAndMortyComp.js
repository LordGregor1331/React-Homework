import React from "react";
import RickAndMortyData from '../RickAndMorty.json'

function Character({ name, gender, image, episodes }) {
    return (
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{gender}</p>
        <Episodes episodes={episodes} />
      </div>
    )
}

function Episode({ name, air_date }) {
    return (
      <div>
        <h3>{name}</h3>
        <p>{air_date}</p>
      </div>
    )
}

function Characters() {
    return (
      <div>
        {RickAndMortyData.data.characters.results.map((character, index) => (
          <Character key={index} {...character} episodes={character.episode} />
        ))}
      </div>
    )
}

function Episodes({ episodes }) {
    return (
      <div>
        {episodes.map((episode, index) => (
          <Episode key={index} {...episode} />
        ))}
      </div>
    )
}

export default Characters