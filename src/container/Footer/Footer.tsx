import { FC } from 'react';
import BlockFlex from 'components/BlockFlex';
import NavBar from 'components/NavBar';
import Paragraph from 'components/Paragraph';
import SocialItem from './SocialItem';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <BlockFlex className='footer__menu'>
          <SocialItem />
          <NavBar />
        </BlockFlex>
        <Paragraph
          className='footer__copyright'
          type='tetriary'
        >
          {'@ Все права защищены.  ООО”Слонум” 2022'}
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;