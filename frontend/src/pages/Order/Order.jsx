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

  const completeOrder = (e, _id) => {
    console.log(_id);
    fetch(`http://127.0.0.1:4000/order/delete/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };
  return (
    <>
      <h2>Order</h2>
      {order.map(({ _id, table, products, totalPrice, date, time }) => (
        <div key={_id}>
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
            type="submit"
            onClick={(e) => {
              completeOrder(e, _id);
            }}
          >
            Completar
          </button>
        </div>
      ))}
    </>
  );
}
