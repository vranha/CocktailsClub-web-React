import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProductCard from "../../components/ProductCard/ProductCard";
import toast from 'react-hot-toast';

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
    console.log(name);
    console.log(productSelection);
    const productAdded = productSelection.includes(name);
    console.log(productAdded);
    const quantity = document.querySelector(`.quantityInput-${id}`).value;
    
   
    if (productAdded) {
      setProductSelection(
        [...productSelection].filter((product) => product != name)
      );
      toast(`${name} eliminado`, {
        icon: '🥵',
        style: {
          border: '4px solid var(--dark)',
          padding: '16px',
          color: 'var(--main)',
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE',
        },
      });
    } else {
      setProductSelection([...productSelection, name]); 
      toast(`${name} añadido al carrito`, {
        icon: '😍',
        style: {
          border: '4px solid var(--dark)',
          padding: '26px',
          color: 'var(--main)'
        },
        iconTheme: {
          primary: 'green',
          secondary: '#FFFAEE',
        },
      });
    }
  };

  const filterProduct = (e, filter) => {
    e.preventDefault();
    const allProducts = document.querySelectorAll(".product-card");

    allProducts.forEach((product) => {
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
    <div className={styles.container}>
      <div className={styles.menuHeader}>
        <Dropdown  as={ButtonGroup}>
          <Button variant="light" >Filtrar</Button>

          <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

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
        <Button className={styles.orderButton} variant="dark" style={{backgroundColor: 'var(--medium)'}}>Realizar Pedido</Button>
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

    </div>
  );
}
