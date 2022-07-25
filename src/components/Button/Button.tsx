import React, { FC } from 'react';
import { IChildClass } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './Button.scss';

interface ButtonProps extends IChildClass {
  type?: 'main-primary' | 'main-secondary' | 'additional';
}

const Button: FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <button className={join('button', className, type)}>
      {children}
    </button>
  );
};

export default Button;