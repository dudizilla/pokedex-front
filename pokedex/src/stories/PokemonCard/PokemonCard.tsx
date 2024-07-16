import React from 'react';
import './pokemon-card.css';
import Image from 'next/image';
import bulbasaur from './001.png';

export interface PokemonCardProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  pokemon: string;
  number: string;
  onClick?: () => void;
}

export const PokemonCard = ({
  size = 'medium',
  backgroundColor,
  pokemon,
  number,
  ...props
}: PokemonCardProps) => {
  return (
    <div className={['card', `card--${size}`]. join(' ')}>
      <p className='pokemon-number'>#{number}</p>
      <Image src={bulbasaur} alt={pokemon} width={100} height={100} className={`pokemon-image--${size}`} />
      <div className='label'>
        <p className='label-text'>
          {pokemon}
        </p>
      </div>
    </div>
  );
};
