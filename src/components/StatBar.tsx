
import StatBAr_module from './StatBAr.module.scss'; type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number
    incorrect: number;
}

function StatBar(props: Props) {
    return <div className={StatBAr_module['stat-container']}>
        <p>
            Questions: {props.currentQuestion}/{props.totalQuestions}
        </p>
        <p>
            Correct: {props.correct}
        </p>
        <p>
            Incorrect: {props.incorrect}
        </p>
    </div>
}

export default StatBar;