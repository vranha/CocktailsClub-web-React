import styles from "./ProductCard.module.scss";
import waiterIcon from "../../assets/waiterIcon.png";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export default function ProductCard({ props, onClick }) {
  const { id, name, description, image, price } = props;

  const selectedStyle = (e, id) => {
    e.preventDefault();
    const cardProduct = document.querySelector(`.product-${id}`);
    const buttonproduct = document.querySelector(`.button-${id}`);
    const quantityInput = document.querySelector(`.quantityInput-${id}`);

    if (cardProduct.style.backgroundColor == "grey") {
      cardProduct.style.backgroundColor = "white";
      cardProduct.style.opacity = "1";
      buttonproduct.innerHTML = `${price}`;
      quantityInput.disabled = false;
    } else {
      cardProduct.style.backgroundColor = "grey";
      cardProduct.style.opacity = "0.5";
      buttonproduct.innerHTML = "X";
      quantityInput.disabled = true;
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
          onClick(e, name, id);
          selectedStyle(e, id, price);
        }}
      >
        <input
          min="1"
          required
          className={`quantityInput-${name} quantityInput-${id} ${styles.quantityInput}`}
          type="number"
          name="quantity"
          id=""
        />
        <Button
          type="submit"
          className={`button-${id} ${styles.buttonPrice}`}
          variant="outline-dark"
        >
          {`${price}€`}
        </Button>

        <img className={styles.buttonIcon} src={waiterIcon} alt="" />
      </Form>
    </div>
  );
}
