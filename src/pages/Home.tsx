import { Link } from "react-router-dom";
import BtnTransparent from "../components/BtnTransparent";

const Home = () => {
  return (
    <div className="home">
      <Link to={`/lan`}>
        <BtnTransparent prop={"Pour écrire un message 💌"} />
      </Link>
      <Link to={`/quizmain`}>
        <BtnTransparent
          prop={"Quizz 🔍"}
          prop2={"(une participation par personne)"}
        />
      </Link>
      <Link to={`/messages`}>
        <BtnTransparent prop={"Livre d'or 📫"} />
      </Link>
      <Link to={`/quizresult`}>
        <BtnTransparent prop={"Trophée 🏆"} />
      </Link>
    </div>
  );
};

export default Home;
