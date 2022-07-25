import BlockFlex from 'components/BlockFlex';
import DiscountItem from 'components/DiscountItem';
import React, { FC } from 'react';
import FormRegistration from './FormRegistration';
import './Registration.scss';

const Registration: FC = () => {
  return (
    <section className='registration'>
      <BlockFlex className='registration__container'>
        <DiscountItem/>
        <FormRegistration/>
      </BlockFlex>
    </section>
  );
};

export default Registration;