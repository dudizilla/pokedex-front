import React, { useState } from 'react';
import './filter-button.css';

export interface FilterButtonProps {
  size: 'small' | 'medium' | 'large';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (values: string) => void;
  values: string[];
}

export const FilterButton = ({
  size = 'medium',
  onClick,
  values,
}: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={['filter-button', `filter-button--${size}`].join(' ')} aria-label='filter button' onClick={() => setIsOpen(!isOpen)}>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`image--${size}`}>
          <path d="M3.5 8H0.5C0.355556 8 0.236111 7.95278 0.141667 7.85833C0.0472223 7.76389 0 7.64444 0 7.5C0 7.35556 0.0472223 7.23611 0.141667 7.14167C0.236111 7.04722 0.355556 7 0.5 7H3.5C3.64444 7 3.76389 7.04722 3.85833 7.14167C3.95278 7.23611 4 7.35556 4 7.5C4 7.64444 3.95278 7.76389 3.85833 7.85833C3.76389 7.95278 3.64444 8 3.5 8ZM11.5 1H0.5C0.355556 1 0.236111 0.952778 0.141667 0.858333C0.0472223 0.763889 0 0.644444 0 0.5C0 0.355556 0.0472223 0.236111 0.141667 0.141667C0.236111 0.0472223 0.355556 0 0.5 0H11.5C11.6444 0 11.7639 0.0472223 11.8583 0.141667C11.9528 0.236111 12 0.355556 12 0.5C12 0.644444 11.9528 0.763889 11.8583 0.858333C11.7639 0.952778 11.6444 1 11.5 1ZM7.5 4.5H0.5C0.355556 4.5 0.236111 4.45278 0.141667 4.35833C0.0472223 4.26389 0 4.14444 0 4C0 3.85556 0.0472223 3.73611 0.141667 3.64167C0.236111 3.54722 0.355556 3.5 0.5 3.5H7.5C7.64444 3.5 7.76389 3.54722 7.85833 3.64167C7.95278 3.73611 8 3.85556 8 4C8 4.14444 7.95278 4.26389 7.85833 4.35833C7.76389 4.45278 7.64444 4.5 7.5 4.5Z" fill="#DC0A2D"/>
        </svg>
      </button>
      <div className={isOpen ? 'filter-options-enabled' : 'filter-options-disabled'}>
        {values.map((value, index) => (
          <button key={index} onClick={() => onClick && onClick(value)} className='filter'>{value}</button>
        ))}
      </div>
      {isOpen && <div className='backdrop' onClick={() => setIsOpen(false)}></div>}
    </>
  );
};