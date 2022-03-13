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

  useEffect(() => {
    console.log(productSelection);
  }, [productSelection]);

  const addProduct = (e, name) => {
    const productAdded = productSelection.includes(name);

    if (productAdded) {
      setProductSelection(
        [...productSelection].filter((product) => product != name)
      );
    }

    if (!productAdded) {
      e.preventDefault();
      setProductSelection([...productSelection, name]);
    }
  };

  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Button variant="dark">Buscar</Button>

        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Todos</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Cócteles</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Tapas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div>{productSelection}</div>
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
