import { FC } from 'react';
import { IChild } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './AccentText.scss';


interface AccentTextProps extends IChild {
  type?: 'primary' | 'secondary';
}

const AccentText: FC<AccentTextProps> = ({ children, type }) => {
  return (
    <span className={join('accent-text', '', type)}>
      {children}
    </span>
  );
};

export default AccentText;