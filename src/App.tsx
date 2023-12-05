import React, { useEffect, useState } from 'react';
import { Difficulty, fetchQuizQuestions } from './API';
import Card from './components/Card';
import axios from "axios";
import qa from "./db.json"


const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(qa)

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  useEffect(()=>{
  //  fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`);
        const data = response.data.results;
        console.log(data);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    fetchData();
  },[])
  

  const startQuiz = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>Quiz</h1>
      <button onClick={startQuiz}>Start</button>
      <p>Score:</p>
      <p>Loading Questions ...</p>
      {/* <Card
        questionNumber={number + 1}
        total={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
