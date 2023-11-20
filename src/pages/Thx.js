import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Thx = ({ datas }) => {
  const [selectedData, setSelectedData] = useState({});
  const { thx } = selectedData || {};
  const params = useParams();
  const lanId = params.languageId;

  useEffect(() => {
    const lanData = datas.find((data) => data.lanCode === lanId);
    setSelectedData(lanData);
  }, [datas, lanId]);

  if (thx) {
    return (
      <div className="thx">
        <h1 className="thx__title">{thx.title}</h1>
        <Link to={`/messages`}>
          <button className="thx__btn">{thx.btn}</button>
        </Link>
        <Link to={`/quizmain`}>
          <button className="thx__btn thx__btn-2">{thx.quiz}</button>
        </Link>
        <Link to={`/`}>
          <button className="thx__btn  thx__btn-3">Page d'accueil 🎈</button>
        </Link>
      </div>
    );
  }
};

export default Thx;
