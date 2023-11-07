import { Link } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faComment } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  const [messageList, setMessageList] = useState([]);
  const q = query(collection(db, "messages"));
  onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
      setMessageList(messages);
    });
  });

  return (
    <div className="messasges">
      <div className="messages__link">
        <Link to={`${process.env.PUBLIC_URL}/`} className="messages__btn">
          <FontAwesomeIcon icon={faHouse} className="messages__icon" />
        </Link>
      </div>
      {messageList.map((message) => (
        <div key={message.id} className="messages__container">
          <div className="messages__top">
            <div className="messages__title">
              <FontAwesomeIcon icon={faComment} className="messages__icon" />
              <span className="messages__name">{message.name}</span>
            </div>
            <span className="messages__date">
              {`${message.dateObj.hours}:${message.dateObj.minutes}, ${message.dateObj.day} ${message.dateObj.month}`}
            </span>
          </div>
          <div className="messages__bottom">
            <span className="messages__message">{message.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;