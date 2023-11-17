import {
  collection,
  query,
  // orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const QuizResult = () => {
  const [score5ClassmentList, score5setClassementList] = useState([]);
  const [score4ClassmentList, score4setClassementList] = useState([]);
  const [score3ClassmentList, score3setClassementList] = useState([]);
  const [score2ClassmentList, score2setClassementList] = useState([]);
  const [score1ClassmentList, score1setClassementList] = useState([]);
  const [score0ClassmentList, score0setClassementList] = useState([]);
  const score5 = query(
    collection(db, "score"),
    // orderBy("score", "desc"),
    where("score", "==", 5)
  );
  const score4 = query(collection(db, "score"), where("score", "==", 4));
  const score3 = query(collection(db, "score"), where("score", "==", 3));
  const score2 = query(collection(db, "score"), where("score", "==", 2));
  const score1 = query(collection(db, "score"), where("score", "==", 1));
  const score0 = query(collection(db, "score"), where("score", "==", 0));
  onSnapshot(score5, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      score5setClassementList(classements);
    });
  });
  onSnapshot(score4, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      score4setClassementList(classements);
    });
  });
  onSnapshot(score3, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      score3setClassementList(classements);
    });
  });
  onSnapshot(score2, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      score2setClassementList(classements);
    });
  });
  onSnapshot(score1, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      score1setClassementList(classements);
    });
  });
  onSnapshot(score0, (querySnapshot) => {
    const classements = [];
    querySnapshot.forEach((doc) => {
      classements.push(doc.data());
      score0setClassementList(classements);
    });
  });

  return (
    <div className="quizresult">
      <span>5️⃣</span>
      <ul className="quizresult__classement">
        {score5ClassmentList.map((classement, index) => (
          <li key={index} className="quizresult__class">
            {classement.name}
          </li>
        ))}
        <span>4️⃣</span>
        {score4ClassmentList.map((classement, index) => (
          <li key={index} className="quizresult__class">
            {classement.name}
          </li>
        ))}
        <span>3️⃣</span>
        {score3ClassmentList.map((classement, index) => (
          <li key={index} className="quizresult__class">
            {classement.name}
          </li>
        ))}
        <span>2️⃣</span>
        {score2ClassmentList.map((classement, index) => (
          <li key={index} className="quizresult__class">
            {classement.name}
          </li>
        ))}
        <span>1️⃣</span>
        {score1ClassmentList.map((classement, index) => (
          <li key={index} className="quizresult__class">
            {classement.name}
          </li>
        ))}
        <span>0️⃣</span>
        {score0ClassmentList.map((classement, index) => (
          <li key={index} className="quizresult__class">
            {classement.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizResult;
