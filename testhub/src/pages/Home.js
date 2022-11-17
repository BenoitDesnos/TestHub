import GameChoice from "../components/GameChoice";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <main className="home">
      <header>
        <Navigation />
      </header>
      <h1 className="home__title">Checkout our latest tests !</h1>
      <GameChoice />
    </main>
  );
}

export default Home;
