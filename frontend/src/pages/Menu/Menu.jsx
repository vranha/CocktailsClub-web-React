import { useEffect, useState, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProductCard from "../../components/ProductCard/ProductCard";
import toast from 'react-hot-toast';
import { motion } from "framer-motion"
import styles from "./Menu.module.scss";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { useAuthState } from '../../context';
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: {
     
      opacity:0,
      
  },
  show: {
     
      opacity:1,
  },
}

export default function Menu() {
  const INITIAL_STATE = {
    product: '',
    quantity: '',
    price: '',
    totalPrice: ''
  }

  const navigate = useNavigate();

  const state = useAuthState()
  const { user } = state;

  const [products, setProducts] = useState([]);
  const [productSelection, setProductSelection] = useState([]);
  const [/* productObject */, setProductObject] = useState(INITIAL_STATE);
  const [totalPrice, setTotalPrice] = useState(0);

  const sideNav = useRef();
  const main = useRef();
  const buttonPedido = useRef();
  

  useEffect(() => {
    fetch("http://127.0.0.1:4000/product")
      .then((product) => product.json())
      .then((product) => {
        setProducts(product);
      });
  }, []);

    /* Set the width of the side navigation to 250px */
    const openNav = () => {
    sideNav.current.style.width = "300px";
    main.current.style.transition = ".5s";
    main.current.style.marginLeft = "250px";
    buttonPedido.current.style.backgroundColor = "var(--dark)";

  }

  const sendOrder = (e) => {
    e.preventDefault();
    console.log(totalPrice);
    fetch("http://127.0.0.1:4000/order/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table: 2,
        products: productSelection,
        totalPrice: totalPrice,
      }),
    });
    toast(` Pedido Realizado `, {
      duration: 2000,
      icon: '🍽',
      style: {
        border: '4px solid blue',
        padding: '56px',
        color: 'var(--main)',
        width: '100%',
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    });
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  };



  const addProduct = (name, id, price) => {
  
    console.log(name);
    const productAdded = productSelection.some((i) => i.product.includes(name));
    const quantity = document.querySelector(`.quantityInput-${id}`).value ? document.querySelector(`.quantityInput-${id}`).value: "1";
   
    
    if (productAdded) {
      setProductSelection(
        [...productSelection].filter((product) =>  product.product !== name));

      const thisProduct = productSelection.find((product) => product.product === name)
      setTotalPrice(totalPrice - thisProduct.totalPrice)
      

      toast(`${name} eliminado`, {
        duration: 2000,
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
      const newProduct = {product: name, quantity: quantity, price: price, totalPrice: quantity * price}
      setProductObject(newProduct);
      setProductSelection([...productSelection, newProduct]);
      setTotalPrice(totalPrice + (price * quantity))

      toast(`${name} añadido `, {
        duration: 2000,
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
    <motion.div
      variants={containerVariants} initial="hidden" animate="show"
      ref={main} id="main" className={styles.container}>
      <div className={styles.menuHeader}>
      {user ? 
      <Button ref={buttonPedido} className={styles.orderButton} onClick={openNav} variant="dark" style={{backgroundColor: 'var(--medium)'}} >Mi Pedido</Button> 
      : <Button className={styles.orderButton} onClick={() => navigate('/register')} variant="dark" style={{backgroundColor: 'var(--medium)'}} >Pedir desde aquí</Button>}
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
      </div>

      <MenuSidebar sendOrder={sendOrder} sideNav={sideNav} main={main} productSelection={productSelection} totalPrice={totalPrice} buttonPedido={buttonPedido}></MenuSidebar>

      <div className={styles.menu}>
        {products.map((product) => (
          <ProductCard
          key={product.name}
          product={product}
          onClickProduct={ addProduct }
          buttonPedido={buttonPedido}
          />
          ))}
      </div>

    </motion.div>
  );
}
