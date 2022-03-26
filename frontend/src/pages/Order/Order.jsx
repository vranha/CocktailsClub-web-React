import { useState, useEffect } from "react";

export default function Order() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/order")
      .then((orders) => orders.json())
      .then((order) => {
        setOrder(order);
        console.log(order);
      });
  }, []);

  const completeOrder = (e, id) => {
    e.preventDefault();
    console.log(id);
  };
  return (
    <>
      <h2>Order</h2>
      {order.map(({ id, table, products, totalPrice, date, time }) => (
        <div key={id}>
          <p>{`Mesa ${table}`}</p>
          {products.map((product) => (
            <div>
              <p>{`${product.quantity}  ${product.product} `}</p>
            </div>
          ))}
          <p></p>
          <p>{totalPrice}</p>
          <p>{`Día ${date}`}</p>
          <p>{`Hora ${time}`}</p>
          <button
            onClick={(e) => {
              completeOrder(e, id);
            }}
          >
            Completar
          </button>
        </div>
      ))}
    </>
  );
}
