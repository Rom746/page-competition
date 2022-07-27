import { FC } from 'react';
import BlockFlex from 'components/BlockFlex';
import TimerItem from './TimerItem';
import './Timer.scss';

const Timer: FC = () => {
  const dots = (<p className='timer__dots'>:</p>);
  return (
    <BlockFlex className='timer'>
      <TimerItem caption='дней' value={'01'} />
      {dots}
      <TimerItem caption='часов' value={'09'}>по МСК</TimerItem>
      {dots}
      <TimerItem caption='минут' value={'43'} />
    </BlockFlex>
  );
};

export default Timer;