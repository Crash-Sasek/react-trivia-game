import styles from './App.module.scss';
import QuestionComp from './components/Question';
import Reset from './components/Reset';
import StatBar from './components/StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';

function App() {
    const allQuestions = questions as Questions

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setinCorrectAnswers] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1)
        else setinCorrectAnswers(incorrectAnswers + 1)

        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    }

    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrectAnswers(0);
        setinCorrectAnswers(0);
        setWaitingToAdvance(false);
    };

    if (currentQuestionIdx >= allQuestions.questions.length) 
        return (
            <Reset 
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        );

    return (
        <div className={styles.app}>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advance}>Next Question...</button>}
        </div>
    );
}

export default App;
