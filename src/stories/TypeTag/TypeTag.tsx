import React from 'react';
import './type-tag.css';

export interface TypeTagProps {
  type: string;
  label: string;
  size: 'small' | 'medium' | 'large';
}

export const TypeTag = ({
  type,
  label,
  size = 'large',
}: TypeTagProps) => {
  return (
    <div className={['tag', `tag--${type.toLocaleLowerCase()}`, `tag--${size}`].join(' ')}>
      <p className='text'>{label}</p>
    </div>
  );
};