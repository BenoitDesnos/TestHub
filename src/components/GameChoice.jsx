import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function GameChoice() {
  const [toTop, setToTop] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [toTop]);

  return (
    <>
      <h1 className="home__title">Découvrez nos tests !</h1>
      <div className="games">
        <Link
          to="/reaction"
          className="games__card"
          onClick={() => setToTop(!toTop)}
        >
          <i className="fa-solid fa-bolt-lightning"></i>
          <h3>Reaction time</h3>
          <p>Testez vos réflèxes visuels</p>
        </Link>
        <Link
          to="/numberMemory"
          className="games__card"
          onClick={() => setToTop(!toTop)}
        >
          <i className="fa-solid fa-database"></i>
          <h3>Number Memory</h3>
          <p>Souvenez-vous du nombre le plus grand possible.</p>
        </Link>
        <Link
          to="/aimTrainer"
          className="games__card "
          onClick={() => setToTop(!toTop)}
        >
          <i className="fa-solid fa-crosshairs"></i>
          <h3>Aim trainer</h3>
          <p>A quelle vitesse pouvez vous détruire les cibles?</p>
        </Link>
        <Link
          to="/verbalMemory"
          className="games__card"
          onClick={() => setToTop(!toTop)}
        >
          <i className="fa-solid fa-book"></i>
          <h3>Verbal Memory</h3>
          <p>Souvenez-vous du plus de mots possible.</p>
        </Link>
        <Link
          to="/"
          className="games__card disabled"
          onClick={() => setToTop(!toTop)}
        >
          <i className="fa-solid fa-eye"></i>
          <h3>Visual Memory</h3>
          <p>Souvenez-vous des positions des carrés !</p>
        </Link>
        <Link
          to="/typing"
          className="games__card "
          onClick={() => setToTop(!toTop)}
        >
          <i className="fa-solid fa-keyboard"></i>
          <h3>Typing</h3>
          <p>Combien de mots par minutes peux-tu écrire?</p>
        </Link>
      </div>
    </>
  );
}

export default GameChoice;
