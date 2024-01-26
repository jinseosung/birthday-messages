type BtnRoseProps = {
  type?: string;
  prop: string | JSX.Element;
  style: string;
  onclick?: () => void;
};

const BtnRose: React.FC<BtnRoseProps> = ({ prop, style, onclick }) => {
  return (
    <button onClick={onclick} className={`btnRose ${style}`}>
      {prop}
    </button>
  );
};

export default BtnRose;
