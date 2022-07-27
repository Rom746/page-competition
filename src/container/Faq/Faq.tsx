import { FC } from 'react';
import FaqItem from './FaqItem';
import './Faq.scss';

const Faq: FC = () => {
  const questions = [
    'Может ли ребёнок заниматься самостоятельно?',
    'Как происходит оплата?',
    'Есть ли гарантии усвоения материала?',
    'С кем будет общаться мой ребёнок?',
    'Каковы принципы обучения?',
    'Сколько раз в неделю можно заниматься?'
  ];

  return (
    <section className='faq'>
      <div className='faq__container'>
        <h2 className='faq__title'>Вопрос/Ответ</h2>
        <div className='faq__items'>
          {questions.map(question =>
            <FaqItem key={question}>{question}</FaqItem>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;