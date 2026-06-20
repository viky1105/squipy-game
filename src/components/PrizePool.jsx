export default function PrizePool({
  stake,
}) {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-3xl text-center shadow-lg">

      <h3 className="text-gray-500">
        Prize Pool
      </h3>

      <h1 className="text-5xl font-bold">
        ${stake * 2}
      </h1>

    </div>
  );
}