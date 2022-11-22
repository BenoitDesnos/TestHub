import GameChoice from "../components/GameChoice";
import Navigation from "../components/Navigation";
import ReactionTest from "./../components/games/ReactionTest";

function Home() {
  return (
    <main className="home">
      <header>
        <Navigation />
      </header>
      <ReactionTest />
      <GameChoice />
    </main>
  );
}

export default Home;
