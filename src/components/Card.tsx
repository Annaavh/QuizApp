import React, {  useRef, useState } from "react";
import "./Card.scss";
import data from "../db.json"


const Card: React.FC = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)

    let Option1 = useRef<HTMLLIElement | null>(null);
    let Option2 = useRef<HTMLLIElement | null>(null);
    let Option3 = useRef<HTMLLIElement | null>(null);
    let Option4 = useRef<HTMLLIElement | null>(null);

    let optionArr = [Option1, Option2, Option3, Option4]

    const checkAnswer = (e: React.MouseEvent<HTMLLIElement>, answer: number) => {
        if (lock === false) {
            const target = e.target as HTMLElement | null;
    
            if (target && 'classList' in target) {
                if (question.answer === answer) {
                    target.classList.add("correct");
                    setLock(true);
                    setScore(prev => prev + 1);
                } else {
                    target.classList.add("wrong");
                    setLock(true);
                    optionArr[question.answer - 1]!.current!.classList.add("correct");
                }
            }
        }
    };
    

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            optionArr.map((option) => {
                option!.current!.classList.remove("wrong");
                option!.current!.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false)
        setResult(false)
    }
    const prev = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
            setQuestion(data[index - 1]);
            setLock(false);
            optionArr.forEach(option => {
                if (option && option.current) {
                    option.current.classList.remove("wrong");
                    option.current.classList.remove("correct");
                }
            });
        }

    };
    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {result ? <div className="container_result">
                <h2>You Scored {score} out of {data.length} </h2>
                <button onClick={() => reset()}>Reset</button>
            </div> : <>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={Option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                    <li ref={Option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
                    <li ref={Option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                    <li ref={Option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
                </ul>
                <div className="container_btn">
                    <button disabled={index <= 0}
                        onClick={() => prev()}
                        className={index <= 0 ? "prev" : ""}
                    >Prev</button>
                    <button onClick={() => next()}>Next</button>
                </div>

                <div className="index">{index + 1} of {data.length} questions</div>
            </>}

        </div>
    )
};
export default Card;



