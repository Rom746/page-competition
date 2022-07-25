import BlockFlex from 'components/BlockFlex';
import DotButton from 'components/DotButton';
import React, { FC } from 'react';
import { IChild } from 'utils/constants/types';
import images from 'utils/constants/images';
import Paragraph from 'components/Paragraph';

const FaqItem: FC<IChild> = ({children}) => {

  return (
    <BlockFlex className='faq__item'>
      <Paragraph type='tetriary'>{children}</Paragraph>
      <DotButton>
        <img src={images.btnOpen} alt="icon" />
      </DotButton>
    </BlockFlex>
  );
};

export default FaqItem;