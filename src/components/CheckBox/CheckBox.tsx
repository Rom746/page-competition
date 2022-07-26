import AccentLink from 'components/AccentLink';
import React, { FC } from 'react';
import { IChildClass } from 'utils/constants/types';
import join from 'utils/joinClasses';
import './CheckBox.scss';

interface CheckBoxProps extends IChildClass {
  type: 'primary' | 'secondary';
}

const CheckBox: FC<CheckBoxProps> = ({ children, type, className}) => {
  const index = 'checkbox' + Math.random();
  const joinType: any = 'additional-' + type;
  return (
    <div className={join('checkbox', className)}>
      <input type="checkbox"
        name={index}
        className='checkbox__input'
      />
      <label htmlFor={index} className='checkbox__label'>
        {
          children ? children : (
            <p className={join('checkbox__text','', type)}>
              {'Отправляя данные я соглашаюсь с '}
              <AccentLink src='/' type={joinType}>
                Условиями конкурса
              </AccentLink>
              {' и '}
              <AccentLink src='/' type={joinType}>
                Политикой обработки данных
              </AccentLink>
            </p>
          )
        }
      </label>
    </div>
  );
};

export default CheckBox;