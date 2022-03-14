import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Menu.module.scss";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [productSelection, setProductSelection] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/product")
      .then((product) => product.json())
      .then((product) => {
        setProducts(product);
      });
  }, []);

  const addProduct = (e, name, id) => {
    e.preventDefault();
    const productAdded = productSelection.includes(name);
    console.log(name);
    const quantity = document.querySelector(`.quantityInput-${id}`).value;
    console.log(quantity);

    if (productAdded) {
      console.log(1);
      setProductSelection(
        [...productSelection].filter((product) => product != name)
      );
    } else {
      setProductSelection([...productSelection, [name, quantity]]);
    }
  };

  const filterProduct = (e, filter) => {
    e.preventDefault();
    const allProducts = document.querySelectorAll(".product-card");

    allProducts.forEach((product) => {
      console.log(product);
      product.style.display = "block";
    });

    if (filter == "cocktail" || filter == "appetizer") {
      const filterProducts = products.filter(
        (product) => product.type !== filter
      );

      filterProducts.forEach(({ id }) => {
        const filterProduct = document.querySelector(`.product-${id}`);
        filterProduct.style.display = "none";
      });
    }
  };

  return (
    <>
      <div className={styles.menuHeader}>
        <Dropdown as={ButtonGroup}>
          <Button variant="dark">Filtro</Button>

          <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) => {
                filterProduct(e, "all");
              }}
            >
              Todos
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                filterProduct(e, "cocktail");
              }}
            >
              Cócteles
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                filterProduct(e, "appetizer");
              }}
            >
              Tapas
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button className={styles.orderButton}>Realizar pedido</Button>
      </div>

      <div className={styles.productSelection}>{productSelection}</div>
      <div className={styles.menu}>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            props={product}
            onClick={addProduct}
          />
        ))}
      </div>
    </>
  );
}
