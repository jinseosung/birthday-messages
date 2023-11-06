import { useParams, useNavigate } from "react-router-dom";

const Message = () => {
  const params = useParams();
  const lanId = params.languageId;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lanId === "kr") {
      navigate("/thx/kr");
    } else if (lanId === "fr") {
      navigate("/thx/fr");
    }
  };

  return (
    <div className="message">
      <h1 className="message__title">
        {lanId === "kr" ? "메세지를 남겨주세요" : "Laissez un message"}
      </h1>
      <form onSubmit={handleSubmit}>
        <textarea className="message__area" required="true"></textarea>
        <div className="message__nameContainer">
          <label>{lanId === "kr" ? "From " : "De "}</label>
          <input
            className="message__nameInput"
            placeholder={lanId === "kr" ? "누구세요?" : "Qui êtes-vous?"}
            required="true"
          />
        </div>
        <button className="message__btn" type="submit">
          {lanId === "kr" ? "진서에게 보내기 💌" : "Envoyer à Jinseo 💌"}
        </button>
      </form>
    </div>
  );
};

export default Message;
