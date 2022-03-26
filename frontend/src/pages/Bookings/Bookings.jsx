import { motion } from "framer-motion"

import styles from './Bookings.module.scss'


const containerVariants = {
    hidden: {
       
        opacity:0,
    },
    show: {
       
        opacity:1,
    },
  
  
  }


export default function Bookings() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className={styles.container}>
            <h2 className={styles.title}>Reserva tu mesa</h2>
            <p>En esta pagina se podran ver las reservas si el usuario esta logueado</p>

            <div className={styles.mapa}></div>

            
            
        </motion.div>
    );
}
