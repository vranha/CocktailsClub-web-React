import { useEffect, useState } from "react";
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
    <div className={styles.menu}>
      {products.map((product) => (
        <ProductCard key={product.name} props={product} />
      ))}
    </div>
  );
}
