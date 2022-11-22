function BestScore({ best }) {
  return best ? (
    <p className="best__score">Your best score is : {best} ms.</p>
  ) : (
    <p className="best__score">Your best score is :</p>
  );
}

export default BestScore;
