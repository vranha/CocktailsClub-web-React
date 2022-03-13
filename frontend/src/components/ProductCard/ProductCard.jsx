import styles from "./ProductCard.module.scss";
import waiterIcon from "../../assets/waiterIcon.png";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function ProductCard({ props, onClick }) {
  const { id, name, description, image, price } = props;

  const selectedStyle = (id) => {
    const cardProduct = document.querySelector(`.product-${id}`);
    console.log(cardProduct);
    cardProduct.style.backgroundColor = "grey";
    cardProduct.style.opacity = "0.7";
  };

  return (
    <div className={`product-${id} ${styles.productCard}`}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.nameDiv}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div>
        <Button
          className={`${styles.buttonPrice}`}
          variant="outline-dark"
          onClick={(e) => {
            onClick(e, name);
            selectedStyle(id);
          }}
        >
          {`${price}€`}
        </Button>

        <img className={styles.buttonIcon} src={waiterIcon} alt="" />
      </div>
    </div>
  );
}
