import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker, { CalendarContainer, registerLocale } from "react-datepicker";
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
    console.log(startDate);
    const date = startDate.toLocaleDateString("es");
    registerLocale("es", es);

    const [table, setTable] = useState("");
    const [hour, setHour] = useState("");
    const [step, setStep] = useState("1");

    useEffect(() => {
        console.log(date);
        fetch(`http://127.0.0.1:4000/booking`)
            .then((res) => res.json())
            .then((res) => {
                const bookings = res.filter((bookings) => bookings.date === date && bookings.hour === hour);
                console.log(bookings); //resultado de la base de datos de las reservas
                
                const buttons = document.querySelectorAll(".orderButton");
                
                buttons.forEach((button) => {
                  console.log(button.innerHTML)
                    bookings.forEach((booking) => {
                        if (booking.table === button.id) {
                            button.disabled = true;
                            button.style.textDecoration = "line-through";
                            button.style.pointerEvents= "none";
                        } else {
                        }
                    });
                });
            });
    }, [date, table, hour]);

    const handleDateSelect = () => {
        setStep("2");
        console.log("step 2")
      };
      
      
      const handleHourSelect = (hour) => {
        setStep("3");
        console.log("step 3")
        console.log(hour);
        setHour(hour);
      };

      const handleTableSelect = (table) => {
        setStep("4");
        console.log("step 4")
        console.log(table);
        setTable(table);
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
                       
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };

    const uploadBooking = async (date, table, hour) => {
        fetch("http://127.0.0.1:4000/booking/new", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: date,
                hour: hour.toString(),
                table: table
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res === "Not available") {
                    console.log("Redirect to booking failed component");
                }
            });
    };
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className={styles.container}>
          <h2 className={styles.title}>{ step === '1' ? "Elije el dia" : step === '2' ? "Elije la hora" : step === '3' ? "Elije la mesa" : "Muchas gracias"}</h2>

          <div className={styles.mapa}>
                {step === "1" ? (
                    <div className={styles.calendario}>
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
                                  padding: "6px",
                                  fontSize: "14px",
                              }}
                          >
                              ¡Elije el dia que mejor te vaya!
                          </div>
                      </DatePicker>
                    </div>
                ) : step === "2" ? (
                  <motion.div
                  className={styles.containerHours}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
              >
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("17:00");
                          
                      }}
                      key="17:00"
                  >
                      17:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("18:00");
                          
                      }}
                  >
                      18:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("19:00");
                          
                      }}
                  >
                      19:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("20:00");
                          
                      }}
                  >
                      20:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("21:00");
                          
                      }}
                  >
                      21:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("22:00");
                          
                      }}
                  >
                      22:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("23:00");
                          
                      }}
                  >
                      23:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("00:00");
                          
                      }}
                  >
                      00:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("01:00");
                          
                      }}
                  >
                      01:00
                  </Button>
                  <Button
                      className={` ${styles.orderButton}`}
                      variant="dark"
                      onClick={() => {
                          handleHourSelect("02:00");
                          
                      }}
                  >
                      02:00
                  </Button>
                  {}
              </motion.div>
                ) : step === "3" ? (
                  <motion.div
                  className={styles.containerTables}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
              >
                  <Button
                      className={`orderButton ${styles.in}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("inside1");
                          uploadBooking(date, "inside1", hour);
                      }}
                      key="inside1"
                      id="inside1"
                  >
                      Interior
                  </Button>
                  <Button
                      className={`orderButton ${styles.in}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("inside2");
                          uploadBooking(date, "inside2", hour);
                      }}
                      key="inside2"
                      id="inside2"
                  >
                      Interior
                  </Button>
                  <Button
                      className={`orderButton ${styles.in}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("inside3");
                          uploadBooking(date, "inside3", hour);
                      }}
                      key="inside3"
                      id="inside3"
                  >
                      Interior
                  </Button>
                  <Button
                      className={`orderButton ${styles.in}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("inside4");
                          uploadBooking(date,"inside4", hour);
                      }}
                      key="inside4"
                      id="inside4"
                  >
                      Interior
                  </Button>
                  <Button
                      className={`orderButton ${styles.in}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("inside5");
                          uploadBooking(date, "inside5", hour);
                      }}
                      key="inside5"
                      id="inside5"
                  >
                      Interior
                  </Button>
                  <Button
                      className={`orderButton ${styles.in}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("inside6");
                          uploadBooking(date, "inside6", hour);
                      }}
                      key="inside6"
                      id="inside6"
                  >
                      Interior
                  </Button>
                  <Button
                      className={`orderButton ${styles.firstTables} ${styles.out}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("outside1");
                          uploadBooking(date, "outside1", hour);
                      }}
                      key="outside1"
                      id="outside1"
                  >
                      Terraza
                  </Button>
                  <Button
                      className={`orderButton ${styles.firstTables} ${styles.out}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("outside2");
                          uploadBooking(date, "outside2", hour);
                      }}
                      key="outside2"
                      id="outside2"
                  >
                      Terraza
                  </Button>
                  <Button
                      className={`orderButton ${styles.out}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("outside3");
                          uploadBooking(date, "outside3", hour);
                      }}
                      key="outside3"
                      id="outside3"
                  >
                      Terraza
                  </Button>
                  <Button
                      className={`orderButton ${styles.out}`}
                      variant="dark"
                      onClick={() => {
                          handleTableSelect("outside4");
                          uploadBooking(date, "outside4", hour);
                      }}
                      key="outside4"
                      id="outside4"
                  >
                      Terraza
                  </Button>
                  {}
              </motion.div>
                ) : (
                  <div className={styles.done}>
                  <h2>Ya estás listo para disfrutar</h2>
                  <p>
                      Nos vemos el <strong>{date}</strong> a las <strong>{hour}</strong> horas
                  </p>
                  <p>Te estaremos esperando</p>
              </div>
                )}
            </div>
        </motion.div>
    );
}
