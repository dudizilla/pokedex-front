import React from 'react';
import './type-tag.css';

export interface TypeTagProps {
  type: string;
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const TypeTag = ({
  type,
  label,
}: TypeTagProps) => {
  return (
    <div className={['tag', `tag--${type}`].join(' ')}>
      <p className='text'>{label}</p>
    </div>
  );
};