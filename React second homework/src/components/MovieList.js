import React from 'react';

const MovieList = ({ page }) => {
  const moviesPerPage = 5
  const startIndex = (page - 1) * moviesPerPage + 1
  const endIndex = startIndex + moviesPerPage - 1
  const movies = [
    "Star Wars Episode IV: The New Hope",
    "Star Wars Episode V: Empire strikes back",
    "Star Wars Episode VI: Return of the Jedi",
    "Star Wars Episode I: The Phantom Menace",
    "Star Wars Episode II: Attack of the Clones",
    "Star Wars Episode III: Revenge of the Sith",
    "Star Wars The Clone Wars",
    "Star Wars Mandalorian",
    "Star Wars Rebels",
    "Star Wars The Clone Wars (series)",
    "Star Wars Obi-Wan Kenobi",
    "Star Wars Episode VII: The Force Awakens",
    "Star Wars Episode VIII: Last Jedi",
    "Star Wars Episode IX: The Rise of Skywalker",
    "Star Wars Jedi Knight Jedi Academy",
    "Star Wars Battlefront",
    "Star Wars Dark Forces",
    "Star Wars Dark Forces II",
    "Star Wars Jedi Knight Jedi Outcast",
    "Star Wars Jedi Knight Jedi Outcast II",
  ];
  const currentPageMovies = movies.slice(startIndex - 1, endIndex);

  return (
    <div className='MovieList'>
      <h2>Star Wars Movie and Games List</h2>
      <ul>
        {currentPageMovies.map((movie, index) => (
          <li key={startIndex + index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;