import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Menu.module.scss";

export default function Menu() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/product")
      .then((product) => product.json())
      .then((product) => {
        setProducts(product);
      });
  }, []);

  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Button variant="dark">Buscar</Button>

        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cócteles</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Tapas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={styles.menu}>
        {products.map((product) => (
          <ProductCard key={product.name} props={product} />
        ))}
      </div>
    </>
  );
}
