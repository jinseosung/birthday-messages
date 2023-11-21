import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect, useMemo } from "react";
import Carousel from "../components/Carousel";
import BtnRose from "../components/BtnRose";

const QuizResult = () => {
  const [classementLists, setClassementLists] = useState({
    score5ClassmentList: [],
    score4ClassmentList: [],
    score3ClassmentList: [],
    score2ClassmentList: [],
    score1ClassmentList: [],
    score0ClassmentList: [],
  });

  const createScoreQuery = (score) =>
    query(collection(db, "score"), where("score", "==", score));

  const scoreQueries = Array.from({ length: 6 }, (a, index) =>
    createScoreQuery(5 - index)
  );

  const listObj = useMemo(
    () => [
      { title: "🥇 5 points", key: "score5ClassmentList" },
      { title: "🥈 4 points", key: "score4ClassmentList" },
      { title: "🥉 3 points", key: "score3ClassmentList" },
      { title: "🏅 2 points", key: "score2ClassmentList" },
      { title: "🎖 1 point", key: "score1ClassmentList" },
      { title: "😅 0 point", key: "score0ClassmentList" },
    ],
    []
  );

  const fetchClassement = (score, classmentList) => {
    onSnapshot(score, (querySnapshot) => {
      const classements = [];
      querySnapshot.forEach((doc) => {
        classements.push(doc.data());
        setClassementLists((prevLists) => ({
          ...prevLists,
          [classmentList]: classements,
        }));
      });
    });
  };

  useEffect(() => {
    listObj.forEach((el, index) => {
      fetchClassement(scoreQueries[index], el.key);
    });
  }, [listObj, scoreQueries]);

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
        {listObj.map((el, index) => (
          <li key={index} className="quizresult__li">
            <span className="quizresult__title">{el.title}</span>
            <div className="quizresult__class">
              {classementLists[el.key].map((classement, index) => (
                <span key={index}>{classement.name}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizResult;
