import styles from "./ProductCard.module.scss";
import waiterIcon from "../../assets/waiterIcon.png";
import Button from "react-bootstrap/Button";

export default function ProductCard({ props }) {
  const { name, description, image, price } = props;
  return (
    <div className={styles.productCard}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div>{name}</div>
      <div className={styles.description}>{description}</div>
      <div>
        <Button className={styles.buttonPrice} variant="outline-dark">
          {`${price}€`}
        </Button>

        <img className={styles.buttonIcon} src={waiterIcon} alt="" />
      </div>
    </div>
  );
}
