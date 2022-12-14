import React from "react";

function BestScore({ message }) {
  return message ? (
    <p className="best__score">{message}</p>
  ) : (
    <p className="best__score">Pas encore de meilleur score.</p>
  );
}

export default BestScore;
