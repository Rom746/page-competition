import BlockFlex from 'components/BlockFlex';
import Paragraph from 'components/Paragraph';
import React, { FC } from 'react';
import { IChild } from 'utils/constants/types';

interface PlanItemProps extends IChild {
  value: number;
}

const PlanItem: FC<PlanItemProps> = ({ value, children }) => {
  return (
    <BlockFlex className='plan__item'>
      <BlockFlex className="plan__dot">{value}</BlockFlex>
      <Paragraph className='plan__text' type='tetriary'>
        {children}
      </Paragraph>
    </BlockFlex>
  );
};

export default PlanItem;