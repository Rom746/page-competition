import { FC } from 'react';
import { IconHeroSpace, IconHeroGirl, IconHeroSpaceBg } from 'utils/constants/AnimatedSvg';
import './HeroImagesBg.scss';

const HeroImagesBg: FC = () => {
  return (
    <div className='hero-image'>
      <div className='space'>
        <img className='space__bg' src={IconHeroSpaceBg} alt='space' />
        {IconHeroSpace()}
      </div>
      <div className='girl'>
        {IconHeroGirl()}
      </div>
    </div>
  );
};

export default HeroImagesBg;