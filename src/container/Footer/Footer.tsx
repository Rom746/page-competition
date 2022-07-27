import { FC, useRef } from 'react';
import BlockFlex from 'components/BlockFlex';
import NavBar from 'components/NavBar';
import Paragraph from 'components/Paragraph';
import ButtonUp from 'components/ButtonUp';
import SocialItem from './SocialItem';
import './Footer.scss';

const Footer: FC = () => {
  const ref = useRef<any>();
  return (
    <footer className='footer' ref={ref}>
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
        <ButtonUp reference={ref}/>
      </div>
    </footer>
  );
};

export default Footer;