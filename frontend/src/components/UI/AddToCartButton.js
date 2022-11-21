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
  const { currentUser } = useContext(UserContext);
  const { orders, addOrder, replaceOrders } = useContext(CartContext);
  const urlParam = useParams();

  const updateCart = async () => {
    let clothingItem;
    let quantityToAdd = 1;

    if (!ref) {
      // AddToCartButton is not in product view
      clothingItem = await ClothesAPI.getSelectedProduct(productID);
    } else if (ref) {
      // AddToCartButton is in product view
      if (!ref.current.valueAsNumber >= 1) {
        return;
      }
      quantityToAdd = ref.current.valueAsNumber;
      clothingItem = await ClothesAPI.getSelectedProduct(urlParam.paramId);
    }
    
    // Handle duplicate orders
    const isDuplicateOrder = checkDuplicateOrders(orders, productID);
    if (isDuplicateOrder) {
      console.log('duplicate, adding: ', quantityToAdd);
      updateOrderQuantity(productID, quantityToAdd, orders, replaceOrders);
    } else {
      clothingItem.quantity = quantityToAdd;
      console.log('!duplicate, adding: ', quantityToAdd);
      addOrder(clothingItem, currentUser);
    }
  };

  return (
    <>
      <button onClick={updateCart}>Add to cart</button>
    </>
  );
});

export { AddToCartButton };
