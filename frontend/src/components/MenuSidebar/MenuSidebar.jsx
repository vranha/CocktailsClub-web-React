import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./MenuSidebar.module.scss";

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
}) {
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sideNav.current.style.width = "0px";
    main.current.style.transition = ".5s";
    main.current.style.marginLeft = "0px";
    buttonPedido.current.style.backgroundColor = "var(--medium)";
  }

  const sendOrder = (e) => {
    e.preventDefault();
    console.log(totalPrice);
    fetch("http://127.0.0.1:4000/order/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table: 2,
        products: productSelection,
        totalPrice: totalPrice,
      }),
    });
  };

  return (
    <>
      <div ref={sideNav} className={styles.sidenav}>
        <div className={styles.closebtn} onClick={closeNav}>
          &times;
        </div>
        <div>
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
                {" "}
                {(pedido.price * pedido.quantity).toFixed(2)}€{" "}
              </p>
            </motion.div>
          ))}
        </div>
        <div className={styles.totalPriceContainer}>
          <hr className={styles.line}></hr>
          <p>Precio total</p>
          <h4 className={styles.totalPrice}>{totalPrice.toFixed(2)}€</h4>
          <Button
            className={styles.orderButton}
            variant="dark"
            style={{ backgroundColor: "var(--medium)" }}
            onClick={(e) => {
              sendOrder(e);
            }}
          >
            Realizar Pedido
          </Button>
        </div>
      </div>
    </>
  );
}