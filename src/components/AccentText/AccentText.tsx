import React, { FC } from 'react';
import join from 'utils/joinClasses';
import './AccentText.scss'
import { AccentTextProps } from 'utils/constants/types';

const AccentText: FC<AccentTextProps> = ({ children, type }) => {
  return (
    <span className={join('accent-text', '', type)}>
      {children}
    </span>
  );
};

export default AccentText;