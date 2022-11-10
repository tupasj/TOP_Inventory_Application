import { useContext } from "react";
import { UsesRemoveOrderButtonContext } from "../../context/UsesRemoveOrderButtonContext";

const CartRemoveOrderBtn = (props) => {
  const { itemCount, setItemCount, removeOrder } = useContext(UsesRemoveOrderButtonContext)
  const id = props.id;
  const inputDefaultVal = props.inputDefaultVal;

  const decrementItemCount = (value) => {
    setItemCount(itemCount - value);
  };

  const deleteOrder = (id) => {
    decrementItemCount(inputDefaultVal);
    removeOrder(id.target.id);
  };

  return (
    <button id={id} className="order__remove-order" onClick={deleteOrder}>
      Remove from cart
    </button>
  );
};

export { CartRemoveOrderBtn };
