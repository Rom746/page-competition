import { FC } from 'react';
import BlockFlex from 'components/BlockFlex';
import Button from 'components/Button';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import images from 'utils/constants/images';

const FormRegistration: FC = () => {
  return (
    <form className='registration__form'>
      <h2 className='registration__title'>
        Зарегистрируйтесь, чтобы участвовать
      </h2>
      <BlockFlex className='registration__inputs'>
        <Input placeholder='ФИО ребёнка' />
        <Input placeholder='Дата рождения' />
        <Input placeholder='Город' />
        <Input placeholder='Email' type='email' />
        <Input placeholder='Пароль' type='password' />
      </BlockFlex>
      <CheckBox type='primary' className='registration__check' />
      <BlockFlex className='registration__buttons'>
        <Button className='registration__button' type='main-secondary'>
          Учавствовать
        </Button>
        <img src={images.planes} alt='Planes' />
      </BlockFlex>
    </form>
  );
};

export default FormRegistration;