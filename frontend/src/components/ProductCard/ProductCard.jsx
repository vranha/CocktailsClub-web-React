import styles from "./ProductCard.module.scss";
import waiterIcon from "../../assets/waiterIcon.png";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useState } from "react";
import ReactTooltip from 'react-tooltip';
import {  useAuthState } from '../../context';

export default function ProductCard({ onClickProduct, product, buttonPedido }) {

  const state = useAuthState()
  const { user } = state;

  const { id, name, description, image, price } = product;

  const [tooltip, setTooltip] = useState('Añadir al carrito');

  const selectedStyle = (e, id) => {
    e.preventDefault();
    const cardProduct = document.querySelector(`.product-${id}`);
    const buttonProduct = document.querySelector(`.button-${id}`);
    const quantityInput = document.querySelector(`.quantityInput-${id}`);

    if (cardProduct.style.backgroundColor === "grey") {
      cardProduct.style.backgroundColor = "white";
      cardProduct.style.opacity = "1";
      buttonProduct.innerHTML = `${price}€`;
      buttonProduct.style.backgroundColor = "white";
      quantityInput.disabled = false;
      setTooltip('Añadir al carrito')
    } else {
      cardProduct.style.backgroundColor = "grey";
      cardProduct.style.opacity = "0.7";
      buttonProduct.innerHTML = "❌";
      buttonProduct.style.backgroundColor = "#ff6262";
      quantityInput.disabled = true;

      buttonPedido.current.style.backgroundColor = "#a12154";
      buttonPedido.current.style.transition = ".4s";
      buttonPedido.current.style.boxShadow = "0 0 10px #ffffff19";
      setTimeout(() => {
        buttonPedido.current.style.backgroundColor = "var(--medium)"  
        buttonPedido.current.style.boxShadow = "0 0 0px #ffffff39";
      }, 400);

      setTooltip('Eliminar')
    }
  };

  return (
    <div
      className={`product-card product-${id} product-${name} ${styles.productCard}`}
    >
      <div className={styles.imageDiv}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.nameDiv}>{name}</div>
      <div className={styles.description}>{description}</div>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onClickProduct(name, id, price);
          selectedStyle(e, id, price);
        }}
      >
        {user ? <input
          min="1"
          className={`quantityInput-${name} quantityInput-${id} ${styles.quantityInput}`}
          type="number"
          name="quantity"
          placeholder="1"
          id=""
          style={{textAlign: 'center'}}
        /> : ''}
        {user ? <Button
          type="submit"
          className={`button-${id} ${styles.buttonPrice}`}
          variant="outline-dark"
          style={{paddingRight:30 }}
          data-tip={tooltip}
          data-for="tooltip"
        >
          {`${price}€`}
        </Button> : ""}

        {user ? <img className={styles.buttonIcon} src={waiterIcon} alt="" /> : ''}
      </Form>

      <ReactTooltip id="tooltip"></ReactTooltip>

    </div>
  );
}
