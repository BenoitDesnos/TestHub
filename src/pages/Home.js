import GameChoice from "../components/GameChoice";
import Navigation from "../components/Navigation";
import Reaction from "../components/Reaction";

function Home() {
  return (
    <main className="home">
      <header>
        <Navigation />
      </header>
      <Reaction />
      <h1 className="home__title">Checkout our latest tests !</h1>
      <GameChoice />
    </main>
  );
}

export default Home;
