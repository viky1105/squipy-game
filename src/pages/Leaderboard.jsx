import leaderboard from "../data/leaderboard";

export default function Leaderboard() {
  return (
    <div className="min-h-screen p-10">

      <h1 className="text-6xl font-bold text-center">
        Leaderboard
      </h1>

      <div className="max-w-2xl mx-auto mt-12">

        {leaderboard.map(
          (
            player,
            index
          ) => (
            <div
              key={index}
              className="flex justify-between bg-white p-6 rounded-2xl shadow mb-4"
            >
              <span>
                {player.name}
              </span>

              <span>
                {player.wins} Wins
              </span>
            </div>
          )
        )}

      </div>

    </div>
  );
}