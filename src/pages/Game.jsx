import {
  useState
} from "react";
import { useEffect } from "react";

import Matchmaking from "../components/Matchmaking";
import Countdown from "../components/Countdown";
import PrizePool from "../components/PrizePool";
import opponents from "../data/opponents";
import Confetti from "react-confetti";
import OpponentCard from "../components/OpponentCard";
import BattleAnimation from "../components/BattleAnimation";

export default function Game() {

  const [stake, setStake] =
  useState(10);

  const [opponent, setOpponent] =
  useState("");
  const [choice, setChoice] =
    useState("");

  const [stage, setStage] =
    useState("select");

  const [result, setResult] =
    useState("");
 
  useEffect(() => {
  if (stage === "battle") {
    const timer = setTimeout(() => {
      finishGame();
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [stage]);

 const startMatch = () => {
  setStage("matching");


  setTimeout(() => {
    const randomOpponent =
      opponents[
        Math.floor(
          Math.random() *
            opponents.length
        )
      ];

    setOpponent(
      randomOpponent
    );

    setStage("found");
  }, 3000);
  
};

// setTimeout(() => {
//   finishGame();
// }, 2000);

  const finishGame = () => {
    const outcomes = [
      "Bullish",
      "Bearish"
    ];

    const random =
      outcomes[
        Math.floor(
          Math.random() *
            outcomes.length
        )
      ];

    setResult(random);

    setStage("result");
  };

  if (stage === "matching") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Matchmaking />
      </div>
    );
  }

  if (stage === "found") {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="space-y-8">

        <OpponentCard
          name={opponent}
        />

        <button
          onClick={() =>
            setStage(
              "countdown"
            )
          }
          className="w-full bg-black text-white py-4 rounded-xl"
        >
          Start Battle
        </button>

      </div>

    </div>
  );
}

  if (stage === "countdown") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Countdown
         onComplete={() =>
           setStage("battle")
         }
       />
      </div>
    );
  }
  
 if (stage === "battle") {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <BattleAnimation />
    </div>
  );
}

  if (stage === "result") {
    const won =
      result === choice;
    const resetGame = () => {
       setChoice("");
       setResult("");
       setOpponent("");
       setStake(10);
       setStage("select");
     };

    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            {won ? "YOU WON" : "YOU LOST"}
          </h1>

          {won && (
            <p className="text-3xl mt-4">
              +${stake * 2}
            </p>
          )}

          {won && <Confetti />}

           <p className="mt-6 text-xl">
             Result was: {result}
           </p>
          <button
            onClick={resetGame}
          >
            Play Again
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="w-full max-w-xl">
    <div className="grid grid-cols-4 gap-3 mb-8">

      {[10,20,50,100].map(
        (amount) => (
          <button
            key={amount}
            onClick={() =>
              setStake(amount)
            }
            className={`p-3 rounded-xl ${
              stake === amount
                ? "bg-black text-white"
                : "border"
            }`}
          >
            ${amount}
          </button>
        )
      )}

</div>

      <div className="bg-white shadow-xl p-10 rounded-3xl w-full max-w-lg noks">

        <h1 className="text-4xl font-bold text-center">
          Choose Your Side
        </h1>

        <PrizePool stake={stake} />

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            onClick={() =>
              setChoice(
                "Bullish"
              )
            }
            className={`p-5 rounded-xl border ${
              choice ===
              "Bullish"
                ? "bg-green-500 text-white"
                : ""
            }`}
          >
            Bullish
          </button>

          <button
            onClick={() =>
              setChoice(
                "Bearish"
              )
            }
            className={`p-5 rounded-xl border ${
              choice ===
              "Bearish"
                ? "bg-red-500 text-white"
                : ""
            }`}
          >
            Bearish
          </button>

        </div>

        <button
          disabled={!choice}
          onClick={startMatch}
          className="w-full mt-8 bg-black text-white py-4 rounded-xl"
        >
          Start Match
        </button>

      </div>
    </div>
  </div>
  );
}