import { Link } from "react-router-dom";
function GameChoice() {
  return (
    <div className="games">
      <a
        href="https://benoitdesnos.github.io/Test-reflexes/"
        className="games__card"
      >
        <i className="fa-solid fa-bolt-lightning"></i>
        <h3>Reaction time</h3>
        <p>Test your visual reflexes</p>
      </a>
      <Link to="/" className="games__card disabled">
        <i className="fa-solid fa-crosshairs"></i>
        <h3>Aim trainer</h3>
        <p>How quickly can you hit all the targets?</p>
      </Link>
      <Link to="/" className="games__card disabled">
        <i className="fa-solid fa-eye"></i>
        <h3>Visual Memory</h3>
        <p>Remember an increasingly large board of squares.</p>
      </Link>
      <Link to="/" className="games__card disabled">
        <i className="fa-solid fa-database"></i>
        <h3>Number Memory</h3>
        <p>Remember the longest number you can.</p>
      </Link>
      <Link to="/" className="games__card disabled">
        <i className="fa-solid fa-book"></i>
        <h3>Verbal Memory</h3>
        <p>Keep as many words in short term memory as possible.</p>
      </Link>
      <Link to="/" className="games__card disabled">
        <i className="fa-solid fa-keyboard"></i>
        <h3>Typing</h3>
        <p>How many words per minute can you type?</p>
      </Link>
    </div>
  );
}

export default GameChoice;
