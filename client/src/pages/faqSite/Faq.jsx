import { useEffect, useState, useContext } from 'react';
import NavContext from '../../store/NavContext';
import QuestionBox from '../../components/questionBox/QuestionBox';
import classes from './Faq.module.css';
import Axios from 'axios';

function Faq() {
  const navCtx = useContext(NavContext);

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    navCtx.changePage('faq');

    const faqReq = {
      method: 'GET',
      url: 'http://localhost:3001/getFaq',
      params: {},
    };

    Axios.request(faqReq).then(response => {
      setFaqs(response.data);
    });
  }, []);

  return (
    <div className={classes.allContainer}>
      <div className={classes.allContent}>
        {faqs.map(question => {
          return (
            <QuestionBox
              key={question.questionId}
              Id={question.questionId}
              question={question.question}
              answer={question.answer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
