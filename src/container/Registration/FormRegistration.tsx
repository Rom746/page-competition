import BlockFlex from 'components/BlockFlex';
import Button from 'components/Button';
import images from 'utils/constants/images';
import React, { FC } from 'react';
import Input from 'components/Input';

const FormRegistration: FC = () => {
   return (
       <form className='registration__form'>
        <h2 className='registration__title'>Зарегистрируйтесь, чтобы участвовать</h2>
        <BlockFlex className='registration__inputs'>
          <Input placeholder='ФИО ребёнка'/>
        </BlockFlex>


        <BlockFlex className='registration__buttons'>
          <Button className='registration__button' type='main-secondary'>Учавствовать</Button>
          <img src={images.planes} alt="Planes" />
        </BlockFlex>
       </form>
   );
};

export default FormRegistration;