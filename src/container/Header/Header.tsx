import BlockFlex from 'components/BlockFlex';
import Button from 'components/Button';
import Logo from 'components/Logo';
import React, { FC } from 'react';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <BlockFlex className='header__menu'>
                    <Logo />
                    <Button className='header__button' type='additional'> Войти </Button>
                </BlockFlex>
            </div>
        </header>
    );
};

export default Header;