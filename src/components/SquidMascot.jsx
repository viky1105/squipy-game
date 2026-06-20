import squid from "../assets/squid.png";
import { motion } from "framer-motion";

export default function SquidMascot() {
  return (
    <motion.img
      src={squid}
      alt="Squipy"
      className="w-44 mx-auto"
      animate={{
        y: [0, -15, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    />
  );
}