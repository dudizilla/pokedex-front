'use client';
import React from "react";

import getAllPokemons from '@/services/getAllPokemons';
import { useEffect, useState } from "react";
import { PokemonCard } from "@/stories/PokemonCard/PokemonCard";
import { Header } from "@/stories/Header/Header";
import './page.css'
import { PokemonDrawer } from "@/stories/PokemonDrawer/PokemonDrawer";

type Pokemon = {
  id: number;
  name: string;
  type: string[];
  base: {
    attack: number;
    defense: number;
    hp: number;
    sp_attack: number;
    sp_defense: number;
    speed: number;
  };
  image: string;
  ability: string[];
};



const values = [
  'Lowest Number',
  'Highest Number',
  'A-Z',
  'Z-A'
]

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDrawer, setOpenDrawer] = useState<Pokemon>();

  const filterButton = (filterValue: string) => {
    const sortedPokemons = [...pokemons];
    switch (filterValue) {
      case 'Lowest Number':
        sortedPokemons.sort((a, b) => a.id - b.id);
        break;
      case 'Highest Number':
        sortedPokemons.sort((a, b) => b.id - a.id);
        break;
      case 'A-Z':
        sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    setPokemons(sortedPokemons);
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getAllPokemons();
      setPokemons(data.data);
    };

    fetchPokemons();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDrawer = (id: number) => {
    setOpenDrawer(pokemons.find(pokemon => pokemon.id === id));
  }

  return (
    <>
      <Header size="large" onClick={filterButton} values={values} searchTerm={handleSearch}/>
      <div className="cards-container">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard onClick={() => handleDrawer(pokemon.id)} key={index} pokemon={pokemon.name} size="large" types={pokemon.type} number={pokemon.id} image={pokemon.image} />
        ))}
      </div>
      {openDrawer && (
        <PokemonDrawer name={openDrawer.name} number={openDrawer.id} types={openDrawer.type} image={openDrawer.image} abilities={openDrawer.ability} base={openDrawer.base} onClick={() => setOpenDrawer(undefined)} />
      )}
    </>
  );
}
