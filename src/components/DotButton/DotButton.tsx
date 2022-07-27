import { FC } from 'react';
import { IChildClass } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './DotButton.scss';

interface DotButtonProps extends IChildClass {
  onClick?: () => void;
}

const DotButton: FC<DotButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={join('dot-btn', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DotButton;