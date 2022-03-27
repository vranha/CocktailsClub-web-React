import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker, {
  CalendarContainer,
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Bookings.module.scss";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function Bookings() {
  const [startDate, setStartDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [step, setStep] = useState("1");
  console.log(startDate);
  const date = startDate.toLocaleDateString("es");

  registerLocale("es", es);

  const handleDateSelect = () => {
    setStep("2");
  };

  const handleHourSelect = (hour) => {
    console.log(hour);
    setHour(hour);
    setStep("3");
  };

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div
            style={{
              background: "#f0f0f0",
              color: "var(--medium",
              fontSize: "20px",
              padding: "16px",
            }}
          >
            Primero elije el dia
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const uploadBooking = (date, hour) => {
    console.log(date);
    console.log(hour);
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={styles.container}
    >
      <h2 className={styles.title}>Reserva tu mesa</h2>

      <div className={styles.mapa}>
        {step === "1" ? (
          <DatePicker
            selected={startDate}
            onSelect={handleDateSelect}
            locale="es"
            onChange={(date) => setStartDate(date)}
            calendarContainer={MyContainer}
            minDate={new Date()}
            inline
            showDisabledMonthNavigation
          >
            <div
              style={{
                color: "var(--medium)",
                padding: "16px",
                fontSize: "14px",
              }}
            >
              ¡Elije el dia que mejor te vaya!
            </div>
          </DatePicker>
        ) : step === "2" ? (
          <motion.div
            onClick={() => {
              uploadBooking(date, hour);
            }}
            className={styles.containerHours}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("17:00")}
            >
              17:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("18:00")}
            >
              18:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("19:00")}
            >
              19:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("20:00")}
            >
              20:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("21:00")}
            >
              21:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("22:00")}
            >
              22:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("23:00")}
            >
              23:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("00:00")}
            >
              00:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("01:00")}
            >
              01:00
            </Button>
            <Button
              className={styles.orderButton}
              variant="dark"
              onClick={() => handleHourSelect("02:00")}
            >
              02:00
            </Button>
          </motion.div>
        ) : (
          <div className={styles.done}>
            <h2>Ya estás listo para disfrutar</h2>
            <p>
              Nos vemos el <strong>{date}</strong> a las <strong>{hour}</strong>{" "}
              horas
            </p>
            <p>Te estaremos esperando</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
