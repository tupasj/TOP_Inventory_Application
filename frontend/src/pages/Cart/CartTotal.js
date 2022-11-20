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
    <div className="cart__total">
      <div className="cart__subtotal__container">
        <div className="cart__subtotal__title">Subtotal:</div>
        <div className="cart__subtotal__value">${subtotal}.00</div>
      </div>
      <button className="cart__checkout-button">Proceed to checkout</button>
    </div>
  );
};

export { CartTotal };
