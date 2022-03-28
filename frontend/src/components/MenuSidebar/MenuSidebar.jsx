import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./MenuSidebar.module.scss";
import { useContext, useRef, useState } from "react";
import Paypal from "../Paypal/Paypal";

const INITIAL_FORM = {
  id: "",
  value: "",
};

const divVariants = {
  hidden: {
    opacity: 0.2,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function MenuSidebar({
  sideNav,
  main,
  productSelection,
  totalPrice,
  buttonPedido,
  sendOrder,
  setNumTable,
  numTable,
}) {
  const listProducts = useRef();

  const [checkout, setcheckout] = useState(false);
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sideNav.current.style.width = "0px";
    main.current.style.transition = ".5s";
    main.current.style.marginLeft = "0px";
    buttonPedido.current.style.backgroundColor = "var(--medium)";
  }

  return (
    <>
      <div ref={sideNav} className={styles.sidenav}>
        <div className={styles.closebtn} onClick={closeNav}>
          &times;
        </div>
        <div ref={listProducts}>
          {productSelection.map((pedido) => (
            <motion.div
              variants={divVariants}
              initial="hidden"
              animate="show"
              key={pedido.quantity + Math.random()}
              className={styles.containerList}
            >
              <span> {pedido.quantity} </span>
              <p className={styles.product}> {pedido.product} </p>
              <p className={styles.price}>  
                {(pedido.price * pedido.quantity).toFixed(2)}€
              </p>
            </motion.div>
          ))}
        </div>
        <div className={styles.totalPriceContainer}>
          <hr className={styles.line}></hr>
          <p>Precio total</p>
          <h4 className={styles.totalPrice}>{totalPrice.toFixed(2)}€</h4>
          <form
            action=""
            onSubmit={(e) => {
              if (productSelection.length > 0) {
                e.preventDefault();
                sendOrder()
              
              // setcheckout(true);
              sideNav.current.style.width = "100vw";
              // listProducts.current.style.display = "none"
              } else {
                 e.preventDefault();
              }
             
            }}
          >
            <div  className={styles.containerMesa}>
              <label htmlFor="table"> Nº Mesa </label>
              <input
                type="number"
                name="table"
                id="table"
                min="1"
                max="10"
                className={styles.input}
                onChange={(e) => setNumTable(e.target.value)}
                required
              />
            </div>
            <div>
              {checkout ? (
                <Paypal sendOrder={sendOrder} totalPrice={totalPrice} />
              ) : (
                <Button
                  type="submit"
                  className={styles.orderButton}
                  variant="dark"
                  style={{ backgroundColor: "var(--medium)" }}
                >
                  Realizar Pedido
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
