import React, { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PuffLoader from "react-spinners/PuffLoader";  
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();
        const promises = data.results.map(async (pokemon) => {
          const pokeRes = await fetch(pokemon.url);
          return await pokeRes.json();
        });
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType
      ? pokemon.types.some((type) => type.type.name === selectedType)
      : true;
    return matchesSearch && matchesType;
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleTypeFilter = (e) => setSelectedType(e.target.value);

  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedType} onChange={handleTypeFilter}>
          <option value="">All Types</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="ground">Ground</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="poison">Poison</option>
          <option value="flying">Flying</option>
          <option value="fairy">Fairy</option>
        </select>
      </div>

      {/* Add the loader while fetching */}
      {loading ? (
        <div className="loader">
          <PuffLoader color="#007bff" size={100} />
        </div>
      ) : filteredPokemons.length === 0 ? (
        <p>No Pokémon found!</p>
      ) : (
        <div className="pokemon-grid">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;