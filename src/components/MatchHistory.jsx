const history =
  JSON.parse(
    localStorage.getItem(
      "history"
    )
  ) || [];

history.push(
  `${choice} vs ${opponent} → ${won ? "WIN" : "LOSS"}`
);

localStorage.setItem(
  "history",
  JSON.stringify(history)
);

export default function MatchHistory({
  history,
}) {
  return (
    <div className="space-y-3">

      {history.map(
        (item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow"
          >
            {item}
          </div>
        )
      )}

    </div>
  );
}