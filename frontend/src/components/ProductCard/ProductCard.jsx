import styles from "./ProductCard.module.scss";
import waiterIcon from "../../assets/waiterIcon.png";

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
        <button className={styles.buttonPrice}>{`${price}€`}</button>
        <img className={styles.buttonIcon} src={waiterIcon} alt="" />
      </div>
    </div>
  );
}
