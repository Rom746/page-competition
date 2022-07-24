import ButtonSecondary from 'components/ButtonSecondary/ButtonSecondary';
import Logo from 'components/Logo';
import React, { FC } from 'react';
import './Header.scss';

const Header: FC = () => {
   return (
       <header>
            <div className="container">
                <div className="header__menu">
                    <Logo/>
                    <ButtonSecondary> Войти </ButtonSecondary>
                </div>
            </div>
       </header>
   );
};

export default Header;