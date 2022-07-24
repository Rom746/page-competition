import { IChildClass } from 'utils/constants/types';
import React, { FC } from 'react';
import './BlockFlex.scss'

const BlockFlex: FC<IChildClass> = ({children, className}) => {
   return (
       <div className={'block-flex ' + (className || '')}>
            {children}
       </div>
   );
};

export default BlockFlex;