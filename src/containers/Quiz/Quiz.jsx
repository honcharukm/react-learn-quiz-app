import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

import classes from './Quiz.module.css';

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Красный', id: 3 },
                    { text: 'Зеленый', id: 4 }
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                answers: [
                    { text: '1700', id: 1 },
                    { text: '1702', id: 2 },
                    { text: '1703', id: 3 },
                    { text: '1803', id: 4 }
                ]
            }
        ]
    }

    onAswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];

            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if(!results[this.state.activeQuestion]) {
                results[this.state.activeQuestion] = 'success';
            }

            this.setState({
                answerState: {[answerId] : 'success'},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                window.clearTimeout(timeout);
            }, 300)
        } else {
            results[this.state.activeQuestion] = 'error';

            this.setState({
                answerState: {[answerId] : 'error'},
                results
            });
        }
    }

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    handlerRetry = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        });
    }

    render () {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.isFinished
                        ? <FinishedQuiz
                                results={ this.state.results }
                                quiz={ this.state.quiz }
                                onRetry={ this.handlerRetry }
                            />
                        : <ActiveQuiz
                                answers={ this.state.quiz[this.state.activeQuestion].answers }
                                question={ this.state.quiz[this.state.activeQuestion].question }
                                quizLength={ this.state.quiz.length }
                                answerNumber={ this.state.activeQuestion + 1 }
                                state={ this.state.answerState }
                                onAnswerClick={ this.onAswerClickHandler }
                            />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;