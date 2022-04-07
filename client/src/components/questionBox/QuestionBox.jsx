import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useState } from 'react';
import classes from './QuestionBox.module.css';

function QuestionBox(props) {
  const questionId = props.Id;
  const [questionClick, setQuestionClick] = useState(null);

  function questionToggle(id) {
    if (questionClick === id) {
      setQuestionClick(null);
    } else {
      setQuestionClick(id);
    }
  }

  return (
    <div
      id={questionId}
      className={
        questionClick === questionId
          ? classes.questionBoxOpen
          : classes.questionBox
      }
      onClick={() => {
        questionToggle(questionId);
      }}
    >
      <div className={classes.question}>
        <h2>{props.question}</h2>
      </div>
      <div className={classes.questionIcons}>
        {questionClick ? (
          <AiOutlineCloseCircle className={classes.questionIconClose} />
        ) : (
          <FiArrowRightCircle className={classes.questionIconArrow} />
        )}
      </div>
      <div
        className={
          questionClick ? classes.questionAnswerOpen : classes.questionAnswer
        }
      >
        {props.answer}
      </div>
    </div>
  );
}

export default QuestionBox;
