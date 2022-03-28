import { useEffect, useRef } from "react";


const Paypal = ({ totalPrice, sendOrder }) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Bar order",
                amount: {
                  currency_code: "EUR",
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          sendOrder()
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [totalPrice]);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default Paypal;
