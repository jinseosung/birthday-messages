import { Link } from "react-router-dom";
import BtnTransparent from "../components/BtnTransparent";
import { Texts } from "../types/texts";

type SelectLanProps = {
  datas: Texts[];
};

const SelectLan: React.FC<SelectLanProps> = ({ datas }) => {
  return (
    <div className="selectlan">
      {datas.map((data) => (
        <Link key={data.id} to={`/message/${data.lanCode}`}>
          <BtnTransparent prop={data.lan} />
        </Link>
      ))}
    </div>
  );
};

export default SelectLan;
