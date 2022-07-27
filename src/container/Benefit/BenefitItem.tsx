import { FC } from 'react';
import { IChild } from 'utils/constants/types';
import Paragraph from 'components/Paragraph';

interface BenefitItemProps extends IChild {
  src: string;
  text: string;
}

const BenefitItem: FC<BenefitItemProps> = ({ src, text, children }) => {
  return (
    <div className='benefit__item'>
      <div className='benefit__image'>
        <img src={src} alt='benefitimage' />
      </div>
      <Paragraph className='benefit__text' type='tetriary'>
        {text}
        {children && <span>{children}</span>}
      </Paragraph>
    </div>
  );
};

export default BenefitItem;