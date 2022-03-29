import { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import styles from './Reservas.module.scss';
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {
     
      opacity:0,
      
  },
  show: {
     
      opacity:1,
  },
}

export default function Reservas() {
  const [bookings, setBookings] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState('');

  useEffect(() => {

//  HACER UN LUZ VERDE EN EL CONTEXT QUE LANCE EL FETCH Y CREE UNA LUZ
   
      function loopFunction(delay, callback){
        var loop = function(){
            callback();
            setTimeout(loop, delay);
        }; loop();
    };
    
    loopFunction(100000, function(){
       fetch("http://127.0.0.1:4000/booking")
      .then((bookings) => bookings.json())
      .then((bookings) => {
        setBookings(bookings);
        console.log(bookings);
      });
    });


  }, []);

  const completeOrder = (e, _id) => {
    console.log(_id);
    fetch(`http://127.0.0.1:4000/booking/delete/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
   
  };

  const setIdAlert = (_id) => {
    setAlert(_id)
    setShow(true)
    
  }



  return (
    <motion.div
      variants={containerVariants} initial="hidden" animate="show" className={styles.container}>
      <h2 className={styles.title}>Reservas</h2>
      <div className={styles.box}>
        {bookings.map(({ hour, table, date, phone, _id, username }) => (
          <div className={styles.order} key={hour + table + date}>
            <div className={styles.center}>
              <p className={styles.table}>{table.charAt(0) === 'i' ? "Dentro" : "Terraza"} <p className={styles.tableName}>{table}</p></p>
              <div>
                <h4 className={styles.username}>{username}</h4>
                <p className={styles.time}>{`${hour}`}</p>
              </div>
              <div>
                <p className={styles.date}>{date}</p>
                <div>
                  <p className={styles.tel}>Número de contacto</p>
                  <a className={styles.phone} href={`tel:${+phone}`}> {phone} </a>
                </div>
              </div>  
              
            </div>

          {alert === _id ? <Alert show={show}  variant="dark" >
        <Alert.Heading>¿Estás seguro?</Alert.Heading>
        <p className="text-dark">
          Se perderá la reserva de la base de datos.
        </p>
        <p className="text-dark">
          Asegurate antes de continuar.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
         <Button
            className=" px-4 py-2 mx-auto"
            variant="danger"

              type="submit"
              onClick={(e) => {
                completeOrder(e, _id);
              }}
            >
              Anular
            </Button>
            <Button onClick={() => setShow(false)} variant="light">
            Atras
          </Button>
        </div>
      </Alert> : ''}  

      {!show && <Button className={styles.anular} variant="dark" onClick={() => setIdAlert(_id) }>Anular Reserva</Button>}
            
          </div>
        ))}
      </div>
    </motion.div>
  );
}
