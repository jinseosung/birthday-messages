import { Link } from "react-router-dom";

const QuizThx = () => {
  return (
    <div className="quizthx">
      <h1 className="quizthx__title">Merci pour ta participation 💖</h1>
      <Link to={`/quizresult`}>
        <button className="quizthx__btn">Trophée 🏆</button>
      </Link>
      <Link to={`/`}>
        <button className="quizthx__btn quizthx__btn-2">Page d'accueil 🎈</button>
      </Link>
    </div>
  );
};

export default QuizThx;
