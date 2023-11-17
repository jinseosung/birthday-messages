import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import questions from "../datas/quiz.json";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const name = params.name;

  const saveScore = async (num) => {
    try {
      await addDoc(collection(db, "score"), {
        id: uuidv4(),
        name: name,
        score: score + num,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestionIndex < questions.length - 1) {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        saveScore(1)
      } else {
        saveScore(0)
      }

      navigate(`/quizthx`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h1 className="quiz__qustion">{currentQuestion.question}</h1>
      <ul className="quiz__answers">
        {currentQuestion.answer.map((answer, index) => (
          <li
            key={index}
            onClick={() => setSelectedAnswer(answer)}
            className={
              selectedAnswer === answer
                ? `quiz__answer selected`
                : `quiz__answer`
            }
          >
            {answer}
          </li>
        ))}
      </ul>
      {selectedAnswer && (
        <button onClick={handleNextQuestion} className="quiz__btn">
          👉
        </button>
      )}
    </div>
  );
};

export default Quiz;
