import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartRemoveOrderBtn = (props) => {
  const { removeOrder } = useContext(CartContext);
  const orderID = props.orderID;
  const currentUser = props.currentUser;

  const deleteOrder = () => {
    removeOrder(orderID, currentUser);
  };

  return (
    <button className="order__remove-order" onClick={deleteOrder}>
      Remove from cart
    </button>
  );
};

export { CartRemoveOrderBtn };
