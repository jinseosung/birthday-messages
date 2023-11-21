export default function BtnRose({ prop, style, onclick }) {
  return (
    <button onClick={onclick} className={`btnRose ${style}`}>
      {prop}
    </button>
  );
}
