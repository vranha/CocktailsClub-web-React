import { useEffect } from 'react';
import { Carousel } from '../../components';
import { useAuthDispatch, useAuthState } from '../../context';
import { checkUserSession } from '../../context/actions/auth.actions';
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
