type BtnTransparentProps = {
  prop: string;
  prop2?: string;
};

const BtnTransparent: React.FC<BtnTransparentProps> = ({ prop, prop2 }) => {
  return (
    <button className="btnTransparent">
      {prop}
      <br />
      <span>{prop2}</span>
    </button>
  );
};

export default BtnTransparent;
