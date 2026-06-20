import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import { motion } from "framer-motion";

export default function BattleAnimation() {
  return (
    <div className="flex justify-center gap-20">

      <motion.div
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
      >
        <TrendingUp size={100} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
      >
        <TrendingDown size={100} />
      </motion.div>

    </div>
  );
}