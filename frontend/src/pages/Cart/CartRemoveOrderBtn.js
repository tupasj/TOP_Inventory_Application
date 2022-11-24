import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartRemoveOrderBtn = (props) => {
  const orderID = props.orderID;
  const { removeOrder } = useContext(CartContext);

  const deleteOrder = () => {
    removeOrder(orderID);
  };

  return (
    <button className="order__remove-order" onClick={deleteOrder}>
      Remove from cart
    </button>
  );
};

export { CartRemoveOrderBtn };