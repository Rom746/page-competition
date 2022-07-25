import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  placeholder?: string;
  type?: 'text' | 'date' | 'email' | 'password';
}

const Input: FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input
      className='input paragraph'
      placeholder={placeholder}
      type={type || 'text'}
    />
  );
};

export default Input;