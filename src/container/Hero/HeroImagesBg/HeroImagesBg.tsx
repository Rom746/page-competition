import React, { FC } from 'react';
import './HeroImagesBg.scss'
import { IconHeroSpace, IconHeroGirl, IconHeroSpaceBg } from 'utils/constants/HeroImage';

const HeroImagesBg: FC = () => {
  return (
    <div className="hero-image">
      <div className='space'>
        <img className='space__bg' src={IconHeroSpaceBg} alt="space" />
        {IconHeroSpace()}
      </div>
      <div className='girl'>
        {IconHeroGirl()}
      </div>
    </div>
  );
};

export default HeroImagesBg;