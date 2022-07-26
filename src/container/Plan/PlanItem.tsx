import BlockFlex from 'components/BlockFlex';
import Paragraph from 'components/Paragraph';
import React, { FC } from 'react';
import { IChildClass } from 'utils/constants/types';
import join from 'utils/joinClasses';

interface PlanItemProps extends IChildClass {
  value: number;
}

const PlanItem: FC<PlanItemProps> = ({ value, children, className }) => {
  return (
    <BlockFlex className={join('plan__item','', className)}>
      <BlockFlex className='plan__dot'>{value}</BlockFlex>
      <Paragraph className='plan__text' type='tetriary'>
        {children}
      </Paragraph>
    </BlockFlex>
  );
};

export default PlanItem;