import AccentTitle from 'components/AccentTitle';
import BlockFlex from 'components/BlockFlex';
import React, { FC } from 'react';
import './Benefit.scss';
import BenefitItem from './BenefitItem';
import images from 'utils/constants/images'
import AccentLink from 'components/AccentLink';

const Benefit: FC = () => {
  const benefits = [
    {
      src: images.bn.star,
      text: 'Шанс занять 1 место — в вашем городе и по всей России'
    },
    {
      src: images.bn.winne,
      text: 'Развитие самостоятельности + свободное время для родителей ;)'
    },
    {
      src: images.bn.certification,
      text: 'Персональный диплом в разных номинациях каждому участнику'
    },
    {
      src: images.bn.gift,
      text: 'Призы и скидки для подписчиков и авторизованных пользователей'
    },
    {
      src: images.bn.email,
      text: 'Бесплатный диплом на email — через 1 день после конкурса '
    }
  ];

  return (
    <section className='benefit'>
      <div className='benefit__container'>
        <h2 className='benefit__title'>
          Для чего {<AccentTitle type='need'>нужно</AccentTitle>} участвовать
        </h2>
        <BlockFlex className='benefit__items'>
          {benefits.map(item =>
            <BenefitItem src={item.src} text={item.text} key={item.text} />
          )}
          <BenefitItem src={images.bn.vk} text='Публикация работ победителей во ВКонтакте. '>
            <AccentLink src='https://vk.com/' type='main-secondary'>Подписывайтесь! </AccentLink>
          </BenefitItem>
        </BlockFlex>
      </div>
    </section>
  );
};

export default Benefit;