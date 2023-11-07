import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Message = ({ datas }) => {
  const [selectedData, setSelectedData] = useState({});
  const [leavedMessage, setLeavedMessage] = useState("");
  const [name, setName] = useState("");
  const { home } = selectedData || {};
  const params = useParams();
  const lanId = params.languageId;
  const navigate = useNavigate();
  const monthList = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jul",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  const date = new Date();

  const dateObj = {
    minutes: date.getMinutes(),
    hours: date.getHours(),
    day: date.getDate(),
    month: monthList[date.getMonth()],
    year: date.getFullYear(),
  };

  const onChange = (e) => {
    const target = e.target;
    target.nodeName === "TEXTAREA"
      ? setLeavedMessage(target.value)
      : setName(target.value);
  };

  useEffect(() => {
    const lanData = datas.find((data) => data.lanCode === lanId);
    setSelectedData(lanData);
  }, [datas, lanId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        name: name,
        message: leavedMessage,
        dateObj,
      });
    } catch (e) {
      console.error(e);
    }

    navigate(`/thx/${lanId}`);
  };

  if (home) {
    return (
      <div className="message">
        <h1 className="message__title">{home.title}</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={onChange}
            className="message__area"
            required
          ></textarea>
          <div className="message__nameContainer">
            <label>{home.from}</label>
            <input
              onChange={onChange}
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
