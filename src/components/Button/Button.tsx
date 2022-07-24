import React, { FC } from 'react';
import { ButtonProps } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './Button.scss';

const Button: FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <button className={join('button', className, type)}>
      {children}
    </button>
  );
};

export default Button;