import { FC } from 'react';
import { IChild } from 'utils/constants/types';
import images from 'utils/constants/images';
import './AccentTitle.scss';

interface AccentTitleProps extends IChild {
  type: 'need' | 'plan' | 'diplom';
}

const AccentTitle: FC<AccentTitleProps> = ({ children, type }) => {
  return (
    <span className='accent-title'>
      {children}
      <span>
        <img src={images.line[type]} alt='line'/>
      </span>
    </span>
  );
};

export default AccentTitle;