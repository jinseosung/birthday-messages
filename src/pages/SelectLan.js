import { Link } from "react-router-dom";
import BtnTransparent from "../components/BtnTransparent";

const SelectLan = ({ datas }) => {
  return (
    <div className="selectlan">
      {datas.map((data) => (
        <Link
          key={data.id}
          to={`/message/${data.lanCode}`}
        >
          <BtnTransparent prop={data.lan} />
        </Link>
      ))}
    </div>
  );
};

export default SelectLan;
