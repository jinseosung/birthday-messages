import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import {
  collection,
  query,
  // orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import BtnRose from "../components/BtnRose";

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

  useEffect(() => {
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
  }, [score0, score1, score2, score3, score4, score5]);

  return (
    <div className="quizresult">
      <div className="quizresult__link">
        <Link to={`/`}>
          <BtnRose
            prop={<FontAwesomeIcon icon={faHouse} />}
            style={`quizresult__btn`}
          />
        </Link>
      </div>
      <Carousel />
      <div className="down-arrow"></div>
      <ul className="quizresult__classement">
        <li className="quizresult__li">
          <span className="quizresult__title">🥇 5 points</span>
          <div className="quizresult__class">
            {score5ClassmentList.map((classement, index) => (
              <span key={index}>{classement.name}</span>
            ))}
          </div>
        </li>
        <li className="quizresult__li">
          <span className="quizresult__title">🥈 4 points</span>
          <div className="quizresult__class">
            {score4ClassmentList.map((classement, index) => (
              <span key={index}>{classement.name}</span>
            ))}
          </div>
        </li>
        <li className="quizresult__li">
          <span className="quizresult__title">🥉 3 points</span>
          <div className="quizresult__class">
            {score3ClassmentList.map((classement, index) => (
              <span key={index}>{classement.name}</span>
            ))}
          </div>
        </li>
        <li className="quizresult__li">
          <span className="quizresult__title">🏅 2 points</span>
          <div className="quizresult__class">
            {score2ClassmentList.map((classement, index) => (
              <span key={index}>{classement.name}</span>
            ))}
          </div>
        </li>
        <li className="quizresult__li">
          <span className="quizresult__title">🎖 1 point</span>
          <div className="quizresult__class">
            {score1ClassmentList.map((classement, index) => (
              <span key={index}>{classement.name}</span>
            ))}
          </div>
        </li>
        <li className="quizresult__li">
          <span className="quizresult__title">😅 0 point</span>
          <div className="quizresult__class">
            {score0ClassmentList.map((classement, index) => (
              <span key={index}>{classement.name}</span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuizResult;
