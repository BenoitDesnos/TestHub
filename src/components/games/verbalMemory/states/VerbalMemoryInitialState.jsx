import React, { useContext } from "react";
import { VerbalMemoryContext } from "../VerbalMemoryContext";

function VerbalMemoryInitialState() {
  const { setGameState } = useContext(VerbalMemoryContext);

  const handleStartGame = () => {
    setGameState((prevState) => {
      return { ...prevState, state: "playing", level: 1 };
    });
  };

  return (
    <div>
      <div className="numbermemory__hero--wrapper">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="numbermemory__hero--icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 5C100 2.23857 97.7614 0 95 0H5C2.23858 0 0 2.23858 0 5V126C0 128.761 2.23858 131 5 131H96C98.2091 131 100 129.209 100 127C100 124.791 98.2091 123 96 123H14.5477C11.7863 123 9.54774 120.761 9.54774 118V106C9.54774 103.239 11.7863 101 14.5477 101H95C97.7614 101 100 98.7614 100 96V5ZM75.1237 80C78.2046 80 80.5524 77.2406 80.0592 74.1995L72.1114 25.1995C71.7188 22.7787 69.6283 21 67.1759 21H61.5314C59.8921 21 58.3568 21.8036 57.4227 23.1508L23.4431 72.1507C21.1437 75.4666 23.5168 80 27.5519 80H28.7769C30.4488 80 32.0101 79.1644 32.9374 77.7732L39.8159 67.4536C40.7432 66.0624 42.3045 65.2268 43.9764 65.2268H62.5724C65.082 65.2268 67.2028 67.0871 67.5298 69.5752L68.3284 75.6516C68.6554 78.1397 70.7762 80 73.2858 80H75.1237ZM55.2419 58.4441C51.2439 58.4441 48.8629 53.9845 51.0871 50.6624L55.3569 44.285C57.9299 40.4418 63.8931 41.852 64.4723 46.4405L65.2773 52.818C65.6542 55.8042 63.3265 58.4441 60.3166 58.4441H55.2419Z"
            fill="white"
          ></path>
          <rect x="16" y="108" width="78" height="8" rx="4" fill="white"></rect>
        </svg>
      </div>
      <h1 className="numbermemory__initial--title">Verbal Memory Test</h1>
      <h2 className="numbermemory__subtitle">
        Vous allez voir des mots, un à la fois. Si vous avez déjà vu ce mot
        durant le test, cliquez sur &quot;VU&quot;. Si vous ne l&apos;avez pas
        vu, cliquez sur &quot;NOUVEAU&quot;.
      </h2>
      <button
        onClick={() => handleStartGame()}
        className="numbermemory__button--cta"
      >
        Commencer
      </button>
    </div>
  );
}

export default VerbalMemoryInitialState;
