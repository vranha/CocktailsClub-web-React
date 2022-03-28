import { useState } from "react";
import Paypal from "../Paypal/Paypal";
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
