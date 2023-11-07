import { Link } from "react-router-dom";
import BtnTransparent from "../components/BtnTransparent";

function Home({ datas }) {
  return (
    <div className="home">
      {datas.map((data) => (
        <Link key={data.id} to={`${process.env.PUBLIC_URL}/message/${data.lanCode}`}>
          <BtnTransparent prop={data.lan} />
        </Link>
      ))}
      <Link to={`${process.env.PUBLIC_URL}/messages`}>
        <BtnTransparent prop={`📫`} />
      </Link>
    </div>
  );
}

export default Home;
