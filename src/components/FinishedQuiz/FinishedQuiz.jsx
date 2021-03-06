import React from 'react';
import Button from '../UI/Button/Button';
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
                <Button
                    onClick={ props.onRetry }
                    type="primary"
                >Повторить</Button>
                <Button
                    type="success"
                >Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;