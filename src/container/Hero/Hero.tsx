import { FC } from 'react';
import BlockFlex from 'components/BlockFlex';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';
import Timer from 'components/Timer';
import HeroImagesBg from './HeroImagesBg';
import './Hero.scss';

const Hero: FC = () => {
  return (
    <section className='hero'>
      <BlockFlex className='hero__container'>
        <div className='hero__content'>
          <Paragraph className='hero__caption' type='caption'>
            От компании СлонУМ
          </Paragraph>
          <h1 className='hero__title'>
            Всероссийский конкурс Детского рисунка
          </h1>
          <Paragraph className='hero__text' type='primary'>
            Учавствуйте в конкурсе и получайте призы в различных
            номинациях детского рисунка для всех возрастов
          </Paragraph>
          <BlockFlex className='hero__inner'>
            <Button className='hero__btn' type='main-primary'>
              Учавствовать
            </Button>
            <Timer />
          </BlockFlex>
        </div>
        <div className='hero__image'>
          <HeroImagesBg />
        </div>
      </BlockFlex>
    </section>
  );
};

export default Hero;