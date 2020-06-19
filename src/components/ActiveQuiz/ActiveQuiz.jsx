import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = props => (
    <div className={ classes.ActiveQuiz }>
        <p>
            <span>
                <strong>{ props.answerNumber }. </strong>
                { props.question }
            </span>
            <small>
                { props.answerNumber } из { props.quizLength }
            </small>
        </p>

        <AnswersList
            answers={ props.answers }
            onAnswerClick={ props.onAnswerClick }
        />
    </div>
);

export default ActiveQuiz;