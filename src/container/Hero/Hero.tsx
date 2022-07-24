import React, { FC } from 'react';
import heroImage from 'assets/hero-image.svg';
import BlockFlex from 'components/BlockFlex';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';
import './Hero.scss'

const Hero: FC = () => {
  return (
    <section className='hero'>
      <BlockFlex className="hero__container">
        <div className="hero__content">
          <Paragraph className='hero__caption' type='caption'> От компании СлонУМ </Paragraph>
          <h1 className='hero__title'>Всероссийский конкурс Детского рисунка</h1>
          <Paragraph className='hero__text' type='primary'>
            Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов
          </Paragraph>
          <BlockFlex className='hero__inner'>
            <Button className='hero__btn' type='main-primary'>Учавствовать</Button>
          </BlockFlex>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="imagehero" />
        </div>
      </BlockFlex>

    </section>
  );
};

export default Hero;