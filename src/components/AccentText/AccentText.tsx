import React, { FC } from 'react';
import join from 'utils/joinClasses';
import './AccentText.scss'
import { IChild } from 'utils/constants/types';

interface AccentTextProps extends IChild{
  type?: 'primary' | 'secondary';
}

const AccentText: FC<AccentTextProps> = ({ children, type }) => {
  return (
    <span className={join('accent-text', '', type)}>
      {children}
    </span>
  );
};

export default AccentText;