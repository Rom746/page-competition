import { FC } from 'react';
import { IChildClass } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './BlockFlex.scss';


const BlockFlex: FC<IChildClass> = ({ children, className }) => {
  return (
    <div className={join('block-flex', className)}>
      {children}
    </div>
  );
};

export default BlockFlex;