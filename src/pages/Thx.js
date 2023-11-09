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
        <Link to={`${process.env.PUBLIC_URL}/messages`}>
          <button className="thx__btn">{thx.btn}</button>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/quizmain`}>
          <button className="thx__btn">{thx.quiz}</button>
        </Link>
      </div>
    );
  }
};

export default Thx;
