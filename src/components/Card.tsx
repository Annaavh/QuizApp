import React from "react";

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    total: number;
}

const Card: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, total }) => {
    return (
        <div>
            <p>Question: {questionNumber} / {total}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} ></p>
            <div>
                {
                    answers.map(answer => (
                        <div>
                            <button disabled={userAnswer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
export default Card;