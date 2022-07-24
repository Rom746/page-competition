import BlockFlex from 'components/BlockFlex';
import React, { FC } from 'react';
import { IChild } from 'utils/constants/types';

interface TimerItemProps extends IChild {
  value: string;
  caption: string;
}

const TimerItem: FC<TimerItemProps> = ({ children, caption, value }) => {
  return (
    <BlockFlex className='timer__item'>
      <p className='timer__value'>{value}</p>
      <p className='timer__caption'>
        {caption}
        {children && <span> {children} </span> }
      </p>
    </BlockFlex>
  );
};

export default TimerItem;