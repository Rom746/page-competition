import { IChildClass } from 'utils/constants/types';
import React, { FC } from 'react';
import join from 'utils/joinClasses';
import './Paragraph.scss'

interface ParagraphProps extends IChildClass {
  type?: 'caption' | 'primary' | 'secondary' | 'tetriary';
}

const Paragraph: FC<ParagraphProps> = ({ children, className, type }) => {
  return (
    <p className={join('paragraph', className, type)}>
      {children}
    </p>
  );
};

export default Paragraph;