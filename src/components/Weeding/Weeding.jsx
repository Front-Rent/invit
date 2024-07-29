import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import WeddingButton from "./WeddingButton/WeddingButton";

import orinak1 from "../assets/images/orinak 1.jpg";

import "./Weeding.scss";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Wedding = () => {
  return (
    <main className="wedding">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Հարսանեկան հրավիրատոմսերի տեսականին
      </motion.h2>
      <motion.div
        className="wedding-examples"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="example" variants={itemVariants}>
          <img src={orinak1} alt="" />
          <Link to="/wedding/barev">
            <WeddingButton />
          </Link>
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
        <motion.div className="example" variants={itemVariants}>
          <img src="" alt="" />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Wedding;
