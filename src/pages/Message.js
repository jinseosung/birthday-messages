import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Message = ({ datas }) => {
  const [selectedData, setSelectedData] = useState({});
  const { home } = selectedData || {};
  const params = useParams();
  const lanId = params.languageId;
  const navigate = useNavigate();

  useEffect(() => {
    const lanData = datas.find((data) => data.lanCode === lanId);
    setSelectedData(lanData);
  }, [datas, lanId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/thx/${lanId}`);
  };

  if (home) {
    return (
      <div className="message">
        <h1 className="message__title">{home.title}</h1>
        <form onSubmit={handleSubmit}>
          <textarea className="message__area" required></textarea>
          <div className="message__nameContainer">
            <label>{home.from}</label>
            <input
              className="message__nameInput"
              placeholder={home.placeholder}
              required
            />
          </div>
          <button className="message__btn" type="submit">
            {home.btn}
          </button>
        </form>
      </div>
    );
  }
};

export default Message;
