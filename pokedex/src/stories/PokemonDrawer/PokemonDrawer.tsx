import React from 'react';
import './pokemon-drawer.css';
import BackArrowIcon from './back-arrow.svg'
import Image from 'next/image';
import { TypeTag } from '../TypeTag/TypeTag';

export interface PokemonDrawerProps {
  name: string;
  number: number;
  types: string[];
  image: string;
  abilities: string[];
  base: {
    attack: number;
    defense: number;
    hp: number;
    sp_attack: number;
    sp_defense: number;
    speed: number;
  };
  onClick: () => void;
  style?: React.CSSProperties;
}

export const PokemonDrawer = ({ name, number, types, image, abilities, base, onClick}: PokemonDrawerProps) => {
  return (
    <>
    <div className={['drawer-container', `drawer-container--${types[0].toLocaleLowerCase()}`].join(' ')}>
      <div className='data-container'>
        <div className='id-pokemon'>
          <Image src={BackArrowIcon} alt='back-arrow' onClick={onClick} />
          <span className='pokemon-id-name'>{name}</span>
          <span className='pokemon-id-name'>#{number.toString().padStart(3, '0')}</span>
        </div>
        <div className='image-types-container'>
          <img src={image} alt={name} className='pokemon-drawer-image'/>
          <div className='types-drawer-container'>
            {types.map((type, index) => (
              <TypeTag key={index} type={type} label={type} size={'large'} />
            ))}
          </div>
        </div>
        <div className='about-pokemon'>
          {abilities.map((ability, index) => (
            <p key={index} style={{margin: '0 0 4px'}}>{ability}</p>
          ))}
          <span style={{fontSize: '12px'}}>Moves</span>
        </div>
        <div style={{width: '90%', padding: '16px', display: 'flex'}}>
          <div className='stats' style={{width: '10%'}}>
            <p>{base.hp}</p>
            <p>{base.attack}</p>
            <p>{base.defense}</p>
            <p>{base.sp_attack}</p>
            <p>{base.sp_defense}</p>
            <p>{base.speed}</p>
          </div>
        <div className="stats-bars" style={{width: '100%', padding: '22px 0', justifyContent: 'space-between'}}>
          <div className={['bar', `bar--${types[0].toLowerCase()}`].join(' ')}>
            <div className="bar-fill" style={{width: `${base.hp}%`, backgroundColor: '#aeaeae', height: '8px', maxWidth: '100%', borderRadius: '8px'}} />
          </div>
          <div className={['bar', `bar--${types[0].toLowerCase()}`].join(' ')}>
            <div className="bar-fill" style={{width: `${base.attack}%`, backgroundColor: '#aeaeae', height: '8px', maxWidth: '100%', borderRadius: '8px'}} />
          </div>
          <div className={['bar', `bar--${types[0].toLowerCase()}`].join(' ')}>
            <div className="bar-fill" style={{width: `${base.defense}%`, backgroundColor: '#aeaeae', height: '8px', maxWidth: '100%', borderRadius: '8px'}} />
          </div>
          <div className={['bar', `bar--${types[0].toLowerCase()}`].join(' ')}>
            <div className="bar-fill" style={{width: `${base.sp_attack}%`, backgroundColor: '#aeaeae', height: '8px', maxWidth: '100%', borderRadius: '8px'}} />
          </div>
          <div className={['bar', `bar--${types[0].toLowerCase()}`].join(' ')}>
            <div className="bar-fill" style={{width: `${base.sp_defense}%`, backgroundColor: '#aeaeae', height: '8px', maxWidth: '100%', borderRadius: '8px'}} />
          </div>
          <div className={['bar', `bar--${types[0].toLowerCase()}`].join(' ')}>
            <div className="bar-fill" style={{width: `${base.speed}%`, backgroundColor: '#aeaeae', height: '8px', maxWidth: '100%', borderRadius: '8px'}} />
          </div>
        </div>
        </div>
      </div>
      <div className='white-background' />
    </div>
    <div className='overlay' onClick={onClick}/>
    </>
  );
};
