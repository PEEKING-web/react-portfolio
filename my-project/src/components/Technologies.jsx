import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";  // For Next.js
import { SiMongodb } from "react-icons/si";    // For MongoDB
import { SiRedis } from "react-icons/si";      // For Redis
import { FaNodeJs } from "react-icons/fa";     // For Node.js
import { SiPostgresql } from "react-icons/si"; // For PostgreSQL
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      < motion.h1 
      whileInView={{opacity:1 ,y:0 }}
      initial={{opacity:0 , y: -100}}
      transition={{duration:1.5}}
      
      className="my-20 text-center text-4xl">Tech Stack</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Individual tech items */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 12px 40px rgb(13, 238, 238)",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 12px 40px rgb(255, 255, 255)",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextdotjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 12px 40px rgba(0, 255, 0, 1)",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 12px 40px rgba(255, 0, 0, 1)",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedis className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 12px 40px rgb(2, 255, 2)",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 12px 40px rgba(0, 0, 255, 1)",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
