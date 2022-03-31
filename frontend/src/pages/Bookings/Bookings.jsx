import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker, { CalendarContainer, registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowLeftSquareFill } from "react-bootstrap-icons";

import styles from "./Bookings.module.scss";
import { useAuthState } from "../../context";
import { Link } from "react-router-dom";

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

    const [sent, setSent] = useState(false);
    const [table, setTable] = useState("");
    const [hour, setHour] = useState("");
    const [step, setStep] = useState("1");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const state = useAuthState()
    const { user } = state;
    

    useEffect(() => {
        console.log(date);

        fetch(`http://127.0.0.1:4000/booking`)
            .then((res) => res.json())
            .then((res) => {
                const bookings = res.filter((bookings) => bookings.date === date && bookings.hour === hour);
                console.log(bookings); //resultado de la base de datos de las reservas

                const buttons = document.querySelectorAll(".orderButton");

                buttons.forEach((button) => {
                    console.log(button.innerHTML);
                    bookings.forEach((booking) => {
                        if (booking.table === button.id) {
                            button.disabled = true;
                            button.style.textDecoration = "line-through";
                            button.style.pointerEvents = "none";
                        } else {
                        }
                    });
                });
            });
    }, [date, table, hour]);

    const handleDateSelect = () => {
        if ((phone.length >= 9 && name.length >= 2) || user) {
            setStep("2");
            console.log("step 2");
        } else {
            setStep("5");
        }
    };

    const handleHourSelect = (hour) => {
        setStep("3");
        console.log("step 3");
        console.log(hour);
        setHour(hour);
    };

    const handleTableSelect = (table) => {
        setStep("4");
        console.log("step 4");
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
                    ></div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };

    const handleSend = async () => {
        setSent(true);
        const emailMail = user.email ?? email
        const userMail = user.username ?? name
        try {
            await axios.post("http://localhost:4000/booking_mail", {
                date, userMail, emailMail, hour
            });
        } catch (error) {
            console.log(error);
        }
    };

    const uploadBooking = async (date, table, hour, phone, name, email) => {
        fetch("http://127.0.0.1:4000/booking/new", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: date,
                hour: hour.toString(),
                table: table,
                phone: user.phone ?? phone,
                username: user.username ?? name,
                email: user.email ?? email
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res === "Not available") {
                    console.log("Redirect to booking failed component");
                }
            });
            handleSend()
    };
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className={styles.container}>
            <h2 className={styles.title}>
                {step === "1"
                    ? "Elije el dia"
                    : step === "2"
                    ? "Elije la hora"
                    : step === "3"
                    ? "Elije la mesa"
                    : step === "4"
                    ? "Muchas gracias"
                    : ""}
            </h2>

            <div className={styles.mapa}>
                {step === "1" ? (
                    <div>
                        <div className="form-group container p-2 text-white ">
                            {!user ?  <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                placeholder="Nombre"
                                className="form-control w-50 mx-auto text-center"
                            /> : ""}
                            
                            {!user ? <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                name="phone"
                                placeholder="Teléfono"
                                className="form-control w-50 mx-auto my-3 text-center"
                            /> : ""}

                            {!user ? <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                placeholder="Email"
                                className="form-control w-50 mx-auto text-center"
                            /> : ""}
                        </div>

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
                    </div>
                ) : step === "2" ? (
                    <motion.div
                        className={styles.containerHours}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <ArrowLeftSquareFill
                            className={styles.arrow}
                            color="white"
                            size={46}
                            onClick={() => setStep("1")}
                        />
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
                            key="18:00"
                        >
                            18:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("19:00");
                            }}
                            key="19:00"
                        >
                            19:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("20:00");
                            }}
                            key="20:00"
                        >
                            20:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("21:00");
                            }}
                            key="21:00"
                        >
                            21:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("22:00");
                            }}
                            key="22:00"
                        >
                            22:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("23:00");
                            }}
                            key="23:00"
                        >
                            23:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("00:00");
                            }}
                            key="00:00"
                        >
                            00:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("01:00");
                            }}
                            key="01:00"
                        >
                            01:00
                        </Button>
                        <Button
                            className={` ${styles.orderButton}`}
                            variant="dark"
                            onClick={() => {
                                handleHourSelect("02:00");
                            }}
                            key="02:00"
                        >
                            02:00
                        </Button>
                        {}
                    </motion.div>
                ) : step === "3" ? (
                    <motion.div
                        key="step3"
                        className={styles.containerTables}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <ArrowLeftSquareFill
                            className={styles.arrow}
                            color="white"
                            size={46}
                            onClick={() => window.location.reload()}
                        />

                        <Button
                            className={`orderButton ${styles.in}`}
                            variant="dark"
                            onClick={() => {
                                handleTableSelect("inside1");
                                uploadBooking(date, "inside1", hour, phone, name, email);
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
                                uploadBooking(date, "inside2", hour, phone, name, email);
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
                                uploadBooking(date, "inside3", hour, phone, name, email);
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
                                uploadBooking(date, "inside4", hour, phone, name, email);
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
                                uploadBooking(date, "inside5", hour, phone, name, email);
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
                                uploadBooking(date, "inside6", hour, phone, name, email);
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
                                uploadBooking(date, "outside1", hour, phone, name, email);
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
                                uploadBooking(date, "outside2", hour, phone, name, email);
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
                                uploadBooking(date, "outside3", hour, phone, name, email);
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
                                uploadBooking(date, "outside4", hour, phone, name, email);
                            }}
                            key="outside4"
                            id="outside4"
                        >
                            Terraza
                        </Button>
                        {}
                    </motion.div>
                ) : step === "4" ? (
                    <motion.div
                        key="step4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className={styles.done}
                    >
                        <h2>Ya tienes sitio</h2>
                        <h2>{user.username ?? name}</h2>
                        <p>
                            Nos vemos el <strong>{date}</strong> a las <strong>{hour}</strong> horas
                        </p>
                        <p>Te estaremos esperando</p>
                    </motion.div>
                ) : (
                    <motion.div className={styles.validation} variants={containerVariants}
                    initial="hidden"
                    animate="show">
                        <h2>Necesitamos todos tus datos</h2>
                        <h3>por si ocurre algun imprevisto</h3>
                        <Link to="/register"> o mejor regístrate</Link>
                        <Button
                            variant="light"
                            onClick={() => {
                                setStep("1");
                            }}
                        >
                            Volver
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
