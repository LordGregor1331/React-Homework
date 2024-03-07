import React from 'react'
import SWAPIdata from '../SWAPI.json'
function Character({ name, gender, eye_color, hair_color, img }) {
    const eyeStyle = { color: eye_color !== "none" ? eye_color : "inherit" }
    return (
      <div>
        <h2>{name}</h2>
        {gender !== "n/a" && <p>Gender: {gender}</p>}
        {hair_color !== "none" && <p>Hair Color: {hair_color}</p>}
        <p style={eyeStyle}>Eye Color: {eye_color}</p>
        <img src={img} style={{ width: '400px', height: '400px' }}/>
      </div>
    )
  }
  function CharactersList() {
    const { results } = SWAPIdata;
    return (
      <div>
        {results.map((character, index) => (
          <Character key={index} {...character.properties} />
        ))}
      </div>
    )
  }

export default CharactersList;