import React, { useEffect, useState } from 'react';
import './Pokemon.css';

export const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=104')
        .then(response => response.json())
        .then(data => {
          const pokemonList = data.results.map(pokemon => ({
            name: pokemon.name,
            picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`
          }));
          setPokemonData(pokemonList);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching Pokemon data:', error);
          setLoading(false);
        });
    }, 1500);
  }, []);

  return (
    <div>
      <div className='head'>
          <div className='headline'>fetch&nbsp;pokemon's&nbsp;data&nbsp;จาก&nbsp;</div>
          <a href='https://pokeapi.co/api/v2'>https://pokeapi.co/api/v2</a>
      </div>

      <div className="pokemon-container">
      {loading
        ? Array.from({ length: 104 }).map((_, index) => (
            <div key={index} className="pokemon-card-skeleton">
              <div className="skeleton-avatar" />
              <div className="skeleton-name" />
            </div>
          ))
        : pokemonData.map((pokemon, index) => (
            <div key={index} className="pokemon-card">
              <img src={pokemon.picture} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
            </div>
          ))}
    </div>
    </div>
  );
};
