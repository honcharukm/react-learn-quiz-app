import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
    const countSuccess = Object
        .keys(props.results)
        .reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }
        return total;
    }, 0);

    return (
        <div className={ classes.FinishedQuiz }>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = classes[props.results[index]];
                        return (
                            <li key={index} className={cls}>
                                <strong>{ index + 1 }</strong>.&nbsp;
                                { quizItem.question }
                            </li>
                        )
                    })
                }
            </ul>

            <p>Правильно { countSuccess } из { props.quiz.length }</p>

            <div>
                <button onClick={ props.onRetry }>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;