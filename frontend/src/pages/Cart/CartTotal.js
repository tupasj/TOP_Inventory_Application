import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { calculateSubtotal } from "../../utils/cartUtils";

const CartTotal = () => {
  const [subtotal, setSubtotal] = useState(0);
  const { orders } = useContext(CartContext);

  useEffect(() => {
    calculateSubtotal(orders, setSubtotal);
  }, [orders]);

  return (
    <div
      className="bg-[#fff] rounded my-1 px-2 py-4 text-center flex flex-col
    justify-center items-center gap-3"
    >
      <div>
        <div className="mb-1">Subtotal:</div>
        <div className="mt-1 text-xl font-bold">${subtotal}.00</div>
      </div>
      <button
        className="px-2 py-1 bg-peach-light border-[1px] 
      border-peach-dark rounded-xl cursor-pointer"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export { CartTotal };