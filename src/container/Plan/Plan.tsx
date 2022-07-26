import AccentLink from 'components/AccentLink';
import AccentTitle from 'components/AccentTitle';
import React, { FC, useRef, useState } from 'react';
import PlanItem from './PlanItem';
import images from 'utils/constants/images';
import './Plan.scss';
import { useObserver } from 'utils/useObserver';
import join from 'utils/joinClasses';

const Plan: FC = () => {
  const ref = useRef<any>();
  const [viewed, setViewed] = useState<string | undefined>(undefined);

  useObserver(ref, () => {
    setViewed('animate');
  });

  return (
    <section className='plan'>
      <div className="plan__container">
        <h2 className="plan__title">
          Пошаговый {<AccentTitle type='plan'> план</AccentTitle>}
        </h2>
        <div className="plan__content">
          <img className={join('plan__plane', '', viewed)} src={images.planePlan} alt="plane" />
          <div className="plan__line">
            <img src={images.linePlan} alt="line"/>
          </div>
          <div className="plan__items">
            <PlanItem className={viewed} value={1}>
              {'Зарегистрируйтесь на конкурс '}
              <AccentLink src='/' type='main-primary'>Здесь</AccentLink>
            </PlanItem>
            <PlanItem className={viewed} value={2}>
              Выполните все условия конкурса
            </PlanItem>
            <PlanItem className={viewed} value={3}>
              {'Загрузите рисунок '}
              <AccentLink src='/' type='main-primary'>Здесь</AccentLink>
              {' или в Личном кабинете'}
            </PlanItem>
          </div>
        </div>
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default Plan;