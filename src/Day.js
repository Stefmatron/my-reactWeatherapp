import "./styles.css";
import icon from './images/icon.sun.png';

export default function Day() {
  return (
    <div>
      <img src={icon} alt="sun icon" />
      <span className="temperature"><strong>15</strong>°C | °F</span>
    </div>
  );
}
