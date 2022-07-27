import { FC } from 'react';
import AccentText from 'components/AccentText';
import Paragraph from 'components/Paragraph';
import './About.scss';

const About: FC = () => {
  return (
    <section className='about'>
      <Paragraph className='about__content' type='secondary'>
        Компания
        <AccentText> СлонУм </AccentText>
        – проводит конкурс для детей в котором могут участвовать ребята
        <AccentText type='primary'> всех возрастов! </AccentText>
        Номинации в которых можно победить, есть возможность проявить
        себя во всех направлениях и даже
        <AccentText type='primary'> без художественных способностей.</AccentText>
      </Paragraph>
    </section>
  );
};

export default About;