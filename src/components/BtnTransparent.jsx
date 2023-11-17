export default function BtnTransparent({ prop, prop2 }) {
  return (
    <button className="btnTransparent">
      {prop}
      <br />
      <span>{prop2}</span>
    </button>
  );
}
