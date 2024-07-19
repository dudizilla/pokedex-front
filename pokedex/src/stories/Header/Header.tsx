import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { FilterButton } from '../FilterButton/FilterButton';
import './header.css';
import logo from './pokeball.svg'
import Image from 'next/image';

export interface HeaderProps {
  size: 'small' | 'medium' | 'large';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (button: any) => void;
  values: string[];
  searchTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ size = 'medium', onClick, values, searchTerm }: HeaderProps) => (
  <header>
    <div className='header'>
      <Image src={logo} alt="logo" width={50} height={50} />
      <div className={['filter-container', `filter-container--${size}`].join(' ')}>
        <SearchBar size={size} placeholder='Search' onChange={searchTerm} />
        <div className='filter-button-container'>
          <FilterButton size={size} onClick={onClick} values={values}/>
        </div>
      </div>
    </div>
  </header>
);
