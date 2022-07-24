import React, { FC } from 'react';
import './AccentTitle.scss'
import images from 'utils/constants/images'
import { AccentTitleProps } from 'utils/constants/types';

const AccentTitle: FC<AccentTitleProps> = ({ children, type }) => {
  return (
    <span className='accent-title'>
      {children}
      <span>
        <img src={images.line[type]} alt='line' />
      </span>
    </span>
  );
};

export default AccentTitle;