import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartRemoveOrderBtn = (props) => {
  const id = props.id;
  const { removeOrder } = useContext(CartContext);

  const deleteOrder = () => {
    removeOrder(id);
  };

  return (
    <button className="order__remove-order" onClick={deleteOrder}>
      Remove from cart
    </button>
  );
};

export { CartRemoveOrderBtn };