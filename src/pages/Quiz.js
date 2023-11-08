import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import questions from "../datas/quiz.json";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const name = params.name;

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      navigate(`${process.env.PUBLIC_URL}/quizmain`);
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
