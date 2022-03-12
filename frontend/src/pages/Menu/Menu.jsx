import { useEffect, useState } from "react";
import ProductCard from "../../components/ProducCard/ProductCard";

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
    <div>
      {products.map((product) => {
        return <ProductCard key={product.name} props={product} />;
      })}
    </div>
  );
}
