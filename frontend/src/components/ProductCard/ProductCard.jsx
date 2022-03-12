import styles from "./ProductCard.module.scss";

export default function ProductCard({ props }) {
  const { name, description, image, price } = props;
  return (
    <div className={styles.productCard}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
}
