import React from 'react';
import './pokemon-card.css';
import { TypeTag } from '../TypeTag/TypeTag';

export interface PokemonCardProps {
  size?: 'small' | 'medium' | 'large';
  pokemon: string;
  number: number;
  onClick?: () => void;
  types: string[];
  image: string;
}

export const PokemonCard = ({
  size = 'medium',
  pokemon,
  number,
  types,
  image,
  onClick,
}: PokemonCardProps) => {
  return (
    <div className={['card', `card--${size}`].join(' ')} onClick={onClick}>
      <p className='pokemon-number'>#{number.toString().padStart(3, '0')}</p>
      <img src={image} className={['pokemon-image', `pokemon-image--${size}`].join(' ')} />
      <div className='label'>
        <p className='label-text'>
          {pokemon}
        </p>
        <div className='types-container' style={types.length === 1 ? {justifyContent: 'space-around'} : {justifyContent: 'space-between'}}>
        {types.map((type) => (
          <TypeTag key={type} type={type} label={size === "small" ? "" : type} size={size} />
        ))}
        </div>
      </div>
      
       
    </div>
  );
};
