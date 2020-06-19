import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
    return (
        <div className={ classes.FinishedQuiz }>
            <ul>
                <li className={ classes.success }>
                    <strong>1. </strong>
                    How are you
                </li>
                <li className={ classes.error }>
                    <strong>2. </strong>
                    How are you
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;