import { motion } from "framer-motion";


export default function Matchmaking() {
  return (
    <div className="text-center">

      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear"
        }}
        className="w-20 h-20 border-4 border-black border-t-transparent rounded-full mx-auto"
      />

      <h2 className="mt-6 text-3xl">
        Finding Opponent...
      </h2>

    </div>
  );
}