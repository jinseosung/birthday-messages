import {
  collection,
  query,
  // orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const QuizThx = () => {
  const [classementList, setClassementList] = useState([]);
  const q = query(
    collection(db, "score"),
    // orderBy("score", "desc"),
    where("score", "==", 5)
  );
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
            🏆 {classement.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizThx;
