import React, { FC } from 'react';
import { IChildClass } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './DotButton.scss';

const DotButton: FC<IChildClass> = ({ children, className }) => {
  return (
    <button className={join('dot-btn', className)}>
      { children }
    </button>
  );
};

export default DotButton;