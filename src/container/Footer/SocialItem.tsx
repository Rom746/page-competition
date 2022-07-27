import { FC } from 'react';
import BlockFlex from 'components/BlockFlex';
import SocialLink from 'components/SocialLink';
import images from 'utils/constants/images'

const SocialItem: FC = () => {
  return (
    <div className='social-item'>
      <p className='social-item__title'>
        Наши соцсети:
      </p>
      <BlockFlex className='social-item__links'>
        <SocialLink icon={images.social.tg} src='/' />
        <SocialLink icon={images.social.dz} src='/' />
        <SocialLink icon={images.social.vk} src='/' />
      </BlockFlex>
    </div>
  );
};

export default SocialItem;