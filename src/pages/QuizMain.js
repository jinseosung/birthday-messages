import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizMain = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleNameSubmit = () => {
    if (!name) {
      return;
    }
    navigate(`${process.env.PUBLIC_URL}/quiz/${name}`);
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
      <button onClick={handleNameSubmit} className="quizmain__btn">Start Quiz 🔍</button>
    </div>
  );
};

export default QuizMain;
