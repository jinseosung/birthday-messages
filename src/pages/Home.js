import { Link } from "react-router-dom";
import BtnTransparent from "../components/BtnTransparent";

function Home({ datas }) {
  return (
    <div className="home">
      <Link to={`${process.env.PUBLIC_URL}/lan`}>
        <BtnTransparent prop={"💌"} />
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/quizmain`}>
        <BtnTransparent prop={"🔍"} />
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/messages`}>
        <BtnTransparent prop={"📫"} />
      </Link>
    </div>
  );
}

export default Home;
