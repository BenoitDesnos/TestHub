import React from "react";
import { Outlet } from "react-router-dom";
import GameChoice from "../components/GameChoice";
import Header from "../layout/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Outlet />
        <GameChoice />
      </main>
    </>
  );
}

export default Home;
