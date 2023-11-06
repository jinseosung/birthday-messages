import { useParams, Link } from "react-router-dom";

const Thx = () => {
  const params = useParams();
  const lanId = params.languageId;

  return (
    <div className="thx">
      <h1 className="thx__title">
        {lanId === "kr" ? "감사합니다 💖" : "Merci beaucoup 💖"}
      </h1>
      <Link to="/">
        <button className="thx__btn">
          {lanId === "kr"
            ? "남긴 메세지 확인하기 📫"
            : "Aller voir mon message 📫"}
        </button>
      </Link>
    </div>
  );
};

export default Thx;
