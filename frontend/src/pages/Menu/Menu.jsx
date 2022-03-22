import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProductCard from "../../components/ProductCard/ProductCard";
import toast from 'react-hot-toast';

import styles from "./Menu.module.scss";

export default function Menu() {
  const INITIAL_STATE = {
    product: '',
    quantity: ''
  }
  const [products, setProducts] = useState([]);
  const [productSelection, setProductSelection] = useState([]);
  const [productObject, setProductObject] = useState(INITIAL_STATE);
  

  useEffect(() => {
    fetch("http://127.0.0.1:4000/product")
      .then((product) => product.json())
      .then((product) => {
        setProducts(product);
      });
  }, []);


  const addProduct = (name, id) => {
  
    console.log(name);
    // console.log(productSelection);
    // const productAdded = productSelection.includes(name);
    const productAdded = productSelection.some((i) => i.product.includes(name));
    const quantity = document.querySelector(`.quantityInput-${id}`).value ? document.querySelector(`.quantityInput-${id}`).value: "1";
    
    
    
    if (productAdded) {
      setProductSelection(
        [...productSelection].filter((product) => product.product !== name)
      );
      toast(`${name} eliminado`, {
        icon: '🥵',
        style: {
          border: '4px solid var(--dark)',
          padding: '26px',
          color: 'var(--main)',
          width: '100%',
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE',
        },
      });
    } else {
      
      // setProductSelection([...productSelection, name]);
      const newProduct = {product: name, quantity: quantity}
      setProductObject(newProduct);
      setProductSelection([...productSelection, newProduct]);
      

      toast(`${name} añadido `, {
        icon: '🤑',
        style: {
          border: '4px solid green',
          padding: '26px',
          color: 'var(--main)',
          width: '100%',
        },
        iconTheme: {
          primary: 'green',
          secondary: '#FFFAEE',
        },
      });


    }
    
  };
  
  
  // useEffect(() => {
  //   // setTimeout
    
  // }, []);
        

  console.log(productSelection);
  console.log("productSelection ->", productSelection); //

  const filterProduct = (e, filter) => {
    e.preventDefault();
    const allProducts = document.querySelectorAll(".product-card");

    allProducts.forEach((product) => {
      product.style.display = "block";
    });

    if (filter === "cocktail" || filter === "appetizer") {
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

      <div className={styles.productSelection}>
        {productSelection.map((pedido) => (
          <p>{pedido.product} <span> {pedido.quantity} </span> </p>
        ))}
      </div>
      <div className={styles.menu}>
        {products.map((product) => (
          <ProductCard
          key={product.name}
          product={product}
          onClickProduct={ addProduct }
          />
          ))}
      </div>

    </div>
  );
}
