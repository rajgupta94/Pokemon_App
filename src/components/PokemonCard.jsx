import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <div color="#007bff" size={100} className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <div className="types">
        {pokemon.types.map((type) => (
          <span key={type.type.name}>{type.type.name}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;