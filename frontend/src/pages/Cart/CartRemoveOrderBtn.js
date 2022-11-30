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
    <button className="px-2 py-1 bg-peach-light border-[1px] 
    border-peach-dark rounded-xl cursor-pointer" onClick={deleteOrder}>
      Remove from cart
    </button>
  );
};

export { CartRemoveOrderBtn };
