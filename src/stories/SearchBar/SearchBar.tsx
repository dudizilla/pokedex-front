import React from 'react';
import './search-bar.css';
import Image from 'next/image';
import search from './search.svg';

export interface SearchBarProps {
    size?: 'small' | 'medium' | 'large';
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar = ({
    size = 'medium',
    placeholder,
    onChange,
}: SearchBarProps) => {
  
  return (
    <div className={['search-bar', `search-bar--${size}`]. join(' ')}>
      <Image src={search} alt='search' className={['search-icon', `search-icon--${size}`].join(' ')} width={20} height={20} />
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
