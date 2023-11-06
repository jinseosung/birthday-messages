import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/message/kr">
        <button className="home__btn home__btn--ko">한국어</button>
      </Link>
      <Link to="/message/fr">
        <button className="home__btn home__btn--fr">Français</button>
      </Link>
    </div>
  );
}

export default Home;
