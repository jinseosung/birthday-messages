import { Link } from "react-router-dom";
import BtnTransparent from "../components/BtnTransparent";

const Home = ({ datas }) => {
  return (
    <div className="home">
      <Link to={`/lan`}>
        <BtnTransparent prop={"💌"} />
      </Link>
      <Link to={`/quizmain`}>
        <BtnTransparent prop={"🔍"} />
      </Link>
      <Link to={`/messages`}>
        <BtnTransparent prop={"📫"} />
      </Link>
    </div>
  );
};

export default Home;
