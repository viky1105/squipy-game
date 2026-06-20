import { useNavigate } from "react-router-dom";
import SquidMascot from "../components/SquidMascot";
import { Wallet } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="absolute top-5 right-5">
        <button className="wallet-btn">
        <Wallet size={18} />
        <span>Connect Wallet</span>
      </button>
      </div>

      <div className="text-center">
          <SquidMascot />
        <h1 className="text-7xl font-bold">
          Squipy Arena
        </h1>

        <p className="mt-4">
          Predict. Battle. Win.
        </p>

        <button
          onClick={() =>
            navigate("/game")
          }
          className="mt-10 bg-black text-white px-8 py-4 rounded-full"
        >
          Enter Arena As Guest
        </button>

      </div>
    </div>
  );
}