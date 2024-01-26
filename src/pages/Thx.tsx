import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BtnRose from "../components/BtnRose";
import { Texts } from "../types/texts";

type ThxProps = {
  datas: Texts[];
};

const Thx: React.FC<ThxProps> = ({ datas }) => {
  const [selectedData, setSelectedData] = useState<Texts | undefined>(
    undefined
  );
  const { thx } = selectedData || {};
  const params = useParams();
  const lanId = params.languageId;

  useEffect(() => {
    const lanData = datas.find((data) => data.lanCode === lanId);
    lanData && setSelectedData(lanData);
  }, [datas, lanId]);

  if (thx) {
    return (
      <div className="thx">
        <h1 className="thx__title">{thx.title}</h1>
        <Link to={`/messages`}>
          <BtnRose prop={thx.btn} style={`thx__btn`} />
        </Link>
        <Link to={`/quizmain`}>
          <BtnRose prop={thx.quiz} style={`thx__btn-2`} />
        </Link>
        <Link to={`/`}>
          <BtnRose prop={thx.main} style={`thx__btn-3`} />
        </Link>
      </div>
    );
  }
};

export default Thx;
