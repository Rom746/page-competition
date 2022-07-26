import BlockFlex from 'components/BlockFlex';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Paragraph from 'components/Paragraph';
import React, { FC } from 'react';
import './Newsletter.scss';

const Newsletter: FC = () => {
  return (
    <section className='newsletter'>
      <div className='newsletter__inner'>
        <h2 className='newsletter__title'>
          Подпишись на нашу рассылку
        </h2>
        <Paragraph className='newsletter__text' type='primary'>
          {'Обещаем присылать только самое важное и интересное :)'}
        </Paragraph>
        <form className='newsletter__form'>
          <BlockFlex className='newsletter__form-row'>
            <Input placeholder='Email' type='email' />
            <Button className='newsletter__button' type='main-primary'>
              Отправить
            </Button>
          </BlockFlex>
          <CheckBox type='secondary' />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;