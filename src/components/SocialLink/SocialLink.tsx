import React, { FC } from 'react';
import join from 'utils/joinClasses';
import './SocialLink.scss';

interface SocialLinkProps {
  type?: 'border';
  src: string;
  icon: string;
}

const SocialLink: FC<SocialLinkProps> = ({ src, type, icon }) => {
  return (
    <a
      className={join('social-link', '', type)}
      href={src}
    >
      <img src={icon} alt="icon"/>
    </a>
  );
};

export default SocialLink;