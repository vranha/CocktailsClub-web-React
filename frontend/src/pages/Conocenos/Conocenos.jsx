import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styles from "./Conocenos.module.scss";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function Conocenos() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={styles.container}
    >
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </motion.div>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className={styles.avatar} layout />

      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Hola</h2>
      <div className={styles.row} />
      <div className={styles.row} />
    </motion.div>
  );
}

const items = [0, 1, 2, 3];
