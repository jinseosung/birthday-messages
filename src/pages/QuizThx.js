import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const QuizThx = () => {
  const [classementList, setClassementList] = useState([]);
  const emojis = ["🥇", "🥈", "🥉", "🏅", "🎖"];
  const q = query(collection(db, "score"), orderBy("score", "desc"), limit(5));
  onSnapshot(q, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      setClassementList(classements);
    });
  });

  return (
    <div className="quizthx">
      <h1 className="quizthx__title">Merci pour ton participation 💖</h1>
      <ul className="quizthx__classement">
        {classementList.map((classement, index) => (
          <li key={index} className="quizthx__class">
            {emojis[index]} {classement.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizThx;
