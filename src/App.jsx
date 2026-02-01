import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((error) => console.log("Ошибка:", error));
  }, []);

  return (
    <div className="container">
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => {
          const pokeId = index + 1;
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

          return (
            <div key={index} className="pokemon-card">
              <img src={image} alt={pokemon.name} className="poke-img" />
              <span className="poke-name">{pokemon.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;