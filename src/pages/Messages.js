import { Link } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import BtnRose from "../components/BtnRose";
import MessageContainer from "../components/MessageContainer";

const Messages = () => {
  const [messageList, setMessageList] = useState([]);
  const q = query(collection(db, "messages"), orderBy("dateObj", "desc"));
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
        <Link to={`/`}>
          <BtnRose
            style={`messages__btn`}
            prop={<FontAwesomeIcon icon={faHouse} />}
          />
        </Link>
      </div>
      {messageList.map((message) => (
        <MessageContainer message={message} />
      ))}
    </div>
  );
};

export default Messages;
