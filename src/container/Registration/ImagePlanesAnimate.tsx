import { FC, useRef, useState } from 'react';
import { useObserver } from 'utils/useObserver';
import { IconPlanes } from 'utils/constants/AnimatedSvg';
import images from 'utils/constants/images';
import join from 'utils/joinClasses';
import './ImagePlanesAnimate.scss';

const ImagePlanesAnimate: FC = () => {
  const ref = useRef<any>();
  const [viewed, setViewed] = useState<string | undefined>(undefined);

  useObserver(ref, () => {
    setViewed('animate');
  });

  return (
    <div className='planes-image'>
      <div className={join('planes-image__plane', '', viewed)}>
        <img src={images.planePlan} alt='plane' />
      </div>
      {IconPlanes(viewed)}
      <div ref={ref}></div>
    </div>
  );
};

export default ImagePlanesAnimate;