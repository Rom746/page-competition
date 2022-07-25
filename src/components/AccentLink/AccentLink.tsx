import React, { FC } from 'react';
import { IChild } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './AccentLink.scss';

interface AccentLinkProps extends IChild {
  type: 'main-primary' | 'main-secondary' | 'additional-primary' | 'additional-secondary';
  src: string;
}

const AccentLink: FC<AccentLinkProps> = ({ src, type, children }) => {
  return (
    <a className={join('link', '', type)} href={src}>
      {children}
    </a>
  );
};

export default AccentLink;