import AccentLink from 'components/AccentLink';
import AccentTitle from 'components/AccentTitle';
import React, { FC } from 'react';
import PlanItem from './PlanItem';
import images from 'utils/constants/images';
import './Plan.scss';

const Plan: FC = () => {
  return (
    <section className='plan'>
      <div className="plan__container">
        <h2 className="plan__title">
          Пошаговый {<AccentTitle type='plan'> план</AccentTitle>}
        </h2>
        <div className="plan__content">
          <div className="plan__line">
            <img src={images.linePlan} alt="line"/>
          </div>
          <div className="plan__items">
            <PlanItem value={1}>
              {'Зарегистрируйтесь на конкурс '}
              <AccentLink src='/' type='main-primary'>Здесь</AccentLink>
            </PlanItem>
            <PlanItem value={2}>
              Выполните все условия конкурса
            </PlanItem>
            <PlanItem value={3}>
              {'Загрузите рисунок '}
              <AccentLink src='/' type='main-primary'>Здесь</AccentLink>
              {' или в Личном кабинете'}
            </PlanItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;