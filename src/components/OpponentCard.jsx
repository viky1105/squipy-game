export default function OpponentCard({
  name,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h3 className="text-xl font-bold">
        Opponent Found
      </h3>

      <p className="mt-4 text-3xl">
        {name}
      </p>

    </div>
  );
}