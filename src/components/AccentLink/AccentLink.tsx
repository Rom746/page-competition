import React, { FC } from 'react';
import { AccentLinkProps } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './AccentLink.scss';

const AccentLink: FC<AccentLinkProps> = ({ src, type, children }) => {
  return (
    <a className={join('link', '', type)} href={src}>
      {children}
    </a>
  );
};

export default AccentLink;