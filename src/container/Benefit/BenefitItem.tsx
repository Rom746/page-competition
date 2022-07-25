import Paragraph from 'components/Paragraph';
import React, { FC } from 'react';
import { BenefitItemProps } from 'utils/constants/types';

const BenefitItem: FC<BenefitItemProps> = ({ src, text, children }) => {
  return (
    <div className='benefit__item'>
      <div className="benefit__image">
        <img src={src} alt="benefitimage" />
      </div>
      <Paragraph className="benefit__text" type='tetriary'>
        {text}
        {children && <span>{children}</span>}
      </Paragraph>
    </div>
  );
};

export default BenefitItem;