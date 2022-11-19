import { forwardRef, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import ClothesAPI from "../../utils/api/ClothesAPI";

const AddToCartButton = forwardRef(function (props, ref) {
  const productID = props.productID;
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const urlParam = useParams();

  const updateCart = async () => {
    if (!ref) {
      const clothingItem = await ClothesAPI.getSelectedProduct(productID);
      ClothesAPI.addCartItem(currentUser.email, clothingItem);
    } else if (ref) {
      const quantity = ref.current.valueAsNumber;
      if (quantity >= 0) {
        const clothingItem = await ClothesAPI.getSelectedProduct(
          urlParam.paramId
        );
        ClothesAPI.addCartItem(currentUser.email, clothingItem, quantity);
      }
    }
    const updatedUser = await ClothesAPI.getUser(currentUser.email);
    setCurrentUser(updatedUser);
  };

  return (
    <>
      <button onClick={updateCart}>Add to cart</button>
    </>
  );
});

export { AddToCartButton };
