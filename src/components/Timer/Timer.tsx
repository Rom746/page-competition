import BlockFlex from 'components/BlockFlex';
import React, { FC } from 'react';
import './Timer.scss';
import TimerItem from './TimerItem';

const Timer: FC = () => {

  const dots = (<p className='timer__dots'>:</p>)

   return (
       <BlockFlex className='timer'>
          <TimerItem caption='дней' value={'01'} />
          {dots}
          <TimerItem caption='часов' value={'09'}> по МСК </TimerItem>
          {dots}
          <TimerItem caption='минут' value={'43'} />
       </BlockFlex>
   );
};

export default Timer;