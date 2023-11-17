import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizMain = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleNameSubmit = () => {
    if (!name) {
      return;
    }
    navigate(`/quiz/${name}`);
  };

  return (
    <div className="quizmain">
      <h1 className="quizmain__title">Ton prénom ?</h1>
      <input
      className="quizmain__input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleNameSubmit} className={name?`quizmain__btn opacity-1`:`quizmain__btn opacity-0`}>Start Quiz 🔍</button>
    </div>
  );
};

export default QuizMain;
