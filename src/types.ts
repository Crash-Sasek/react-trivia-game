export type Questions = {
    questions: []
}

export type Question = {
    question: string;
    choices: string[];
    correctAnswerIdx: number;
}