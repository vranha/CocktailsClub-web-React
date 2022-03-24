import { Button } from "react-bootstrap";
import styles from "./MenuSidebar.module.scss";

export default function MenuSidebar({ sideNav, main, productSelection, totalPrice, buttonPedido }) {
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
                <div>
                    {productSelection.map((pedido) => (
                        <div  key={pedido.quantity+Math.random()}  className={styles.containerList}>
                            <span> {pedido.quantity} </span>
                            <p  className={styles.product}> {pedido.product} </p>
                            <p className={styles.price}> {(pedido.price * pedido.quantity).toFixed(2)}€ </p>
                        </div>                        
                    ))}
                </div>
            <div className={styles.totalPriceContainer}>
                <hr className={styles.line}></hr>  
                <p>Precio total</p>
                <h4 className={styles.totalPrice}>{totalPrice.toFixed(2)}€</h4>
                <Button className={styles.orderButton} variant="dark" style={{backgroundColor: 'var(--medium)'}}>Realizar Pedido</Button>
            </div>          

            </div>

        </>
    );
}
