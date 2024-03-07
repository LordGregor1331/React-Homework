import './App.css';
import React from 'react';
import PopulationDataComponent from './components/PopDataComp.js';
import Characters from './components/RickAndMortyComp.js';
import CharactersList from './components/SWAPIcomponent.js';

function App() {
  return (
    <div className="App">
      <div className='population'><PopulationDataComponent/></div>
      <div className='population'><Characters/></div>
      <div className='population'><CharactersList/></div>
      
    </div>
  );
}

export default App;
