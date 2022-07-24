import React, { FC } from 'react';
import images from 'constants/images'
import './Logo.scss'

const Logo: FC = () => {
   return (
       <a className='logo' href='/'>
            <img className='logo__image' src={images.logo} alt="logo" />
            <p className="logo__title">
                Слон <span>УМ</span>
            </p>
       </a>
   );
};

export default Logo;