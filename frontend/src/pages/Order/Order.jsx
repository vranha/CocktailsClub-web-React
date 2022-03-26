import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from './Order.module.scss';

export default function Order() {
  const [order, setOrder] = useState([]);
  useEffect(() => {

//  HACER UN LUZ VERDE EN EL CONTEXT QUE LANCE EL FETCH Y CREE UNA LUZ
   
      function loopFunction(delay, callback){
        var loop = function(){
            callback();
            setTimeout(loop, delay);
        }; loop();
    };
    
    loopFunction(10000, function(){
       fetch("http://127.0.0.1:4000/order")
      .then((orders) => orders.json())
      .then((order) => {
        setOrder(order);
        console.log(order);
      });
    });


  }, []);

  const completeOrder = (e, _id) => {
    console.log(_id);
    fetch(`http://127.0.0.1:4000/order/delete/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
   
  };



  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pedidos</h2>
      <div className={styles.box}>
        {order.map(({ _id, table, products, totalPrice, date, time }) => (
          <div className={styles.order} key={_id}>
            <div className={styles.center}>
              <p className={styles.table}>Mesa  <span className={styles.tableNum}>{table}</span></p>
                         <div > {products.map((product) => (
                <p onClick={(e) => {
                  return e.target.style.color = "red"
                }} className={styles.products} key={Math.random()}> <span className={styles.productNum}>{product.quantity}</span>  {product.product }</p>
              ))}</div>
              <p className={styles.time}>{`${time}`}</p>
            </div>
            <Button
            className={styles.completed}
            variant="dark"
            style={{ backgroundColor: "green" }}
              type="submit"
              onClick={(e) => {
                completeOrder(e, _id);
              }}
            >
              Completado
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
