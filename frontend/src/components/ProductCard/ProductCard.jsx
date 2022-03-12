import styles from "./ProductCard.module.scss";
import waiterIcon from "../../assets/waiterIcon.png";

import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function ProductCard({ props }) {
  const { name, description, image, price } = props;
  const [productSelection, setProductSelection] = useState([]);

  const handdleProductSelection = (e, name) => {
    //e.preventDefault();
    setProductSelection([name]);
    console.log(productSelection);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.nameDiv}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div>
        <Button
          className={styles.buttonPrice}
          variant="outline-dark"
          onClick={(e) => {
            handdleProductSelection(e, name);
            console.log(name);
          }}
        >
          {`${price}€`}
        </Button>

        <img className={styles.buttonIcon} src={waiterIcon} alt="" />
      </div>
    </div>
  );
}
