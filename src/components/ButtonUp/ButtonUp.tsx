import { FC, RefObject, useState } from 'react';
import DotButton from 'components/DotButton';
import { useObserver } from 'utils/useObserver';
import images from 'utils/constants/images';
import join from 'utils/joinClasses';
import './ButtonUp.scss';

interface ButtonUpProps {
  reference: RefObject<Element>;
}

const ButtonUp: FC<ButtonUpProps> = ({ reference }) => {
  const [viewed, setViewed] = useState<string | undefined>(undefined);

  useObserver(reference, () => {
    setViewed('active');
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <DotButton
      className={join('button-up', '', viewed)}
      onClick={scrollToTop}
    >
      <img src={images.arrowUp} alt="up" />
    </DotButton>
  );
};

export default ButtonUp;