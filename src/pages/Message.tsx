import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import BtnRose from "../components/BtnRose";
import { Texts } from "../types/texts";

type MessageProps = {
  datas: Texts[];
};

const Message: React.FC<MessageProps> = ({ datas }) => {
  const [selectedData, setSelectedData] = useState<Texts | undefined>(
    undefined
  );
  const [leavedMessage, setLeavedMessage] = useState("");
  const [name, setName] = useState("");
  const { message } = selectedData || {};
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

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    target.nodeName === "TEXTAREA"
      ? setLeavedMessage(target.value)
      : setName(target.value);
  };

  useEffect(() => {
    const lanData = datas.find((data) => data.lanCode === lanId);
    lanData && setSelectedData(lanData);
  }, [datas, lanId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        id: uuidv4(),
        name: name,
        message: leavedMessage,
        dateObj,
      });
    } catch (e) {
      console.error(e);
    }

    navigate(`/thx/${lanId}`);
  };

  if (message) {
    return (
      <div className="message">
        <h1 className="message__title">{message.title}</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={onChange}
            className="message__area"
            required
          ></textarea>
          <div className="message__nameContainer">
            <label>{message.from}</label>
            <input
              onChange={onChange}
              className="message__nameInput"
              placeholder={message.placeholder}
              required
            />
          </div>
          <BtnRose type="submit" prop={message.btn} style={`message__btn`} />
        </form>
      </div>
    );
  }
};

export default Message;
