type Props= {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
}

function Reset(props: Props) {
    return (
        <div>
            <h1>You scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
            <button onClick={props.onPress}>Try Again!</button>
        </div>
    );
}

export default Reset