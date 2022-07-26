import BlockFlex from 'components/BlockFlex';
import Paragraph from 'components/Paragraph';
import SocialLink from 'components/SocialLink';
import React, { FC } from 'react';
import images from 'utils/constants/images'
import './DiscountItem.scss';

const DiscountItem: FC = () => {
  return (
    <div className='discount'>
      <div className='discount__head'>
        <img src={images.headDiscount} alt="head discount" />
        <p>Скидка за репост</p>
      </div>
      <div className='discount__body'>
        <Paragraph type='tetriary'>
          Стоимость участия:
        </Paragraph>
        <BlockFlex className='discount__price'>
          149₽
          <span>299₽</span>
        </BlockFlex>
        <Paragraph type='tetriary'>
          {'При наличии репоста в соцсетях :)'}
        </Paragraph>
      </div>
      <BlockFlex className='discount__foot'>
        <p>Получить скидку:</p>
        <BlockFlex className='discount__social'>
          <SocialLink icon={images.social.vk} src='https://vk.com/' type='border'/>
          <SocialLink icon={images.social.ok} src='https://ok.ru/' type='border'/>
        </BlockFlex>
      </BlockFlex>
    </div>
  );
};

export default DiscountItem;