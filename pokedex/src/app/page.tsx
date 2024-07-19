'use client';
import React from "react";
import { Nunito } from "next/font/google";
import getAllPokemons from '@/services/getAllPokemons';
import { useEffect, useState } from "react";
import { PokemonCard } from "@/stories/PokemonCard/PokemonCard";
import { Header } from "@/stories/Header/Header";
import './page.css'

type Pokemon = {
  id: number;
  name: string;
  type: string[];
  base: {
    attack: number;
    defense: number;
    hp: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  image: string;
  ability: string[];
};

const nunito = Nunito({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

const values = [
  'Lowest Number',
  'Highest Number',
  'A-Z',
  'Z-A'
]

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div style={{ fontFamily: nunito.style.fontFamily }} className="full-page">
      <Header size="large" onClick={filterButton} values={values} searchTerm={handleSearch}/>
      <div className="cards-container">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon.name} size="large" types={pokemon.type} number={pokemon.id} image={pokemon.image} />
        ))}
      </div>
    </div>
  );
}
