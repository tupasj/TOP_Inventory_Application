import { forwardRef, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import {
  checkDuplicateOrders,
  updateOrderQuantity,
} from "../../utils/cartUtils";
import ClothesAPI from "../../utils/api/ClothesAPI";

const AddToCartButton = forwardRef(function (props, ref) {
  const productID = props.productID;
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { orders, addOrder, replaceOrders } = useContext(CartContext);
  const urlParam = useParams();

  const updateCart = async () => {
    if (!ref) {
      // Not in product view
      const clothingItem = await ClothesAPI.getSelectedProduct(productID);
      addOrder(clothingItem, currentUser);
    } else if (ref) {
      // Is in product view
      const inputValueQuantity = ref.current.valueAsNumber;
      const productID = urlParam.paramId;

      if (inputValueQuantity >= 1) {
        // Is valid input?
        const clothingItem = await ClothesAPI.getSelectedProduct(productID);

        // Handle duplicate orders to either add or update orders
        const isDuplicateOrder = checkDuplicateOrders(orders, productID);
        if (isDuplicateOrder) {
          updateOrderQuantity(
            productID,
            inputValueQuantity,
            orders,
            replaceOrders
          );
        } else {
          clothingItem.quantity = inputValueQuantity;
          addOrder(clothingItem, currentUser);
        }
      }
    }
    if (currentUser) {
      const updatedUser = await ClothesAPI.getUser(currentUser.email);
      setCurrentUser(updatedUser);
    }
  };

  return (
    <>
      <button onClick={updateCart}>Add to cart</button>
    </>
  );
});

export { AddToCartButton };
