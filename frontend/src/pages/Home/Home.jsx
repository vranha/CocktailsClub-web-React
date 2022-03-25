import { Carousel } from '../../components';
import styles from './Home.module.scss';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
       
        opacity:0,
    },
    show: {      
        opacity:1,
    },
    
  
  }

export default function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show"  className={styles.container}>
            <div className={styles.carousel__container}>
                <Carousel />
            </div>
        </motion.div>
    );
}
