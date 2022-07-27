import { FC } from 'react';
import AccentTitle from 'components/AccentTitle';
import BlockFlex from 'components/BlockFlex';
import Paragraph from 'components/Paragraph';
import images from 'utils/constants/images';
import './Certificate.scss';

const Certificate: FC = () => {
  return (
    <section className='certificate'>
      <div className='certificate__container'>
        <BlockFlex className='certificate__content'>
          <div className='certificate__inner'>
            <h2 className='certificate__title'>
              Выдаём{<AccentTitle type='diplom'> дипломы </AccentTitle>}участникам
            </h2>
            <Paragraph className='certificate__text' type='primary'>
              <span>
                Жюри конкурса рассмотрит работы и выделит победителей
                по городам и возрастным категориям, а также определит
                другие номинации, подчеркнув уникальную особенность
                каждого конкретного рисунка — дипломы получат все дети!
              </span>
              <span>
                Скачать диплом можно будет в личном кабинете через
                сутки после окончания конкурса, дополнительно вышлем
                его на e-mail
              </span>
              <span>
                Со слоном к победам напролом!
              </span>
            </Paragraph>
          </div>
          <div className='certificate__image'>
            <img src={images.certificate} alt='certificate' />
          </div>
        </BlockFlex>
      </div>
    </section>
  );
};

export default Certificate;