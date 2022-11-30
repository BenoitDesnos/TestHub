function BestScore({ message }) {
  return message ? (
    <p className="best__score">{message}</p>
  ) : (
    <p className="best__score">Your best score is :</p>
  );
}

export default BestScore;
