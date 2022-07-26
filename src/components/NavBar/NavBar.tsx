import React, { FC } from 'react';
import './NavBar.scss';
const NavBar: FC = () => {
  const links = ['Главная', 'Личный кабинет', 'Контакты', 'Конфиденциальность'];
  return (
    <nav className='navbar'>
      <ul className='navbar__links'>
        {links.map((item) => (
          <li key={item}>
            <a href='/' className='navbar__link'>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;