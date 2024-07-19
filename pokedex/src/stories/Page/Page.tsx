import React from 'react';

import { Header } from '../Header/Header';
import './page.css';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export interface PageProps {
  size: 'small' | 'medium' | 'large';
  pokemon: string;
  number: number;
  types: string[];
  image: string;
}
export const Page = ({size = "medium", number, pokemon, types, image}: PageProps) => {

  return (
    <div className='full-page'>
      <Header size={size} values={[]} searchTerm={(event: React.ChangeEvent<HTMLInputElement>) => {}} />
      <div className="cards-container">
        <PokemonCard size={size} number={number} pokemon={pokemon} types={types} image={image} />
      </div>
    </div>  
  );
};
