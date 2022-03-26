import { motion } from "framer-motion"
import { forwardRef, useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker, { CalendarContainer } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)

    const MyContainer = ({ className, children }) => {
        return (
          <div style={{ padding: "16px", color: "#fff",}}>
            <CalendarContainer className={className}>
              <div style={{ background: "#f0f0f0", color:"var(--medium", fontSize: "20px",padding: "16px"}}>
                Primero elije el dia
              </div>
              <div style={{ position: "relative" }}>{children}</div>
            </CalendarContainer>
          </div>
        );
      };
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className={styles.container}>
            <h2 className={styles.title}>Reserva tu mesa</h2>
            <p>En esta pagina se podran ver las reservas si el usuario esta logueado</p>

            <div className={styles.mapa}>
            <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarContainer={MyContainer}
      minDate={new Date()}
      inline
      showDisabledMonthNavigation
    >
        <div style={{ color: "var(--medium)", padding: "16px", fontSize: "14px"}}>¡Elije el dia que mejor te vaya!</div>
    </DatePicker>
            </div>

            
            
        </motion.div>
    );
}
