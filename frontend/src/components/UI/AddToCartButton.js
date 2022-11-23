import { forwardRef, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import { checkDuplicateOrders } from "../../utils/cartUtils";
import ClothesAPI from "../../utils/api/ClothesAPI";

const AddToCartButton = forwardRef(function (props, ref) {
  const productID = props.productID;
  const { currentUser } = useContext(UserContext);
  const { orders, addOrder, updateOrder } = useContext(CartContext);
  const urlParam = useParams();

  const updateCart = async () => {
    let clothingItem;
    let quantity = 1;

    if (!ref) {
      // AddToCartButton is not in product view
      clothingItem = await ClothesAPI.getSelectedProduct(productID);
    } else if (ref) {
      // AddToCartButton is in product view
      if (!ref.current.valueAsNumber >= 1) {
        return;
      }
      quantity = ref.current.valueAsNumber;
      clothingItem = await ClothesAPI.getSelectedProduct(urlParam.paramId);
    }

    // Handle duplicate orders
    const isDuplicateOrder = checkDuplicateOrders(orders, productID);
    if (isDuplicateOrder) {
      updateOrder(quantity, clothingItem, currentUser);
    } else {
      if (!ref) {
        addOrder(currentUser, clothingItem, false);
      } else if (ref) {
        addOrder(currentUser, clothingItem, quantity);
      }
    }
  };

  return (
    <>
      <button onClick={updateCart}>Add to cart</button>
    </>
  );
});

export { AddToCartButton };
