import { useState } from "react";

const Payment = () => {
  const [checkout, setcheckout] = useState(false);
  return (
    <div>
      {checkout ? (
        <Paypal />
      ) : (
        <button
          onClick={() => {
            setcheckout(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default Payment;
