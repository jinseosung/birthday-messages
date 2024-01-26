import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import datas from "../datas/answerImgs.json";

export default function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgList = datas[0].images;

  const prevImg = () => {
    imgIndex === 0
      ? setImgIndex(imgList.length - 1)
      : setImgIndex(imgIndex - 1);
  };

  const nextImg = () => {
    imgIndex === imgList.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);
  };

  return (
    <div className="carousel">
      <img className="carousel__img" src={imgList[imgIndex]} alt="answer" />
      <FontAwesomeIcon
        className="carousel__icon carousel__icon-left"
        icon={faChevronLeft}
        onClick={prevImg}
      />
      <FontAwesomeIcon
        className="carousel__icon carousel__icon-right"
        icon={faChevronRight}
        onClick={nextImg}
      />
    </div>
  );
}
