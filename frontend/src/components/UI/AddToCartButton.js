import { forwardRef } from "react";
import { useParams } from "react-router-dom";
import ClothesAPI from "../../utils/api/ClothesAPI";

const AddToCartButton = forwardRef(function (props, ref) {
  const productID = props.productID;
  const urlParam = useParams();

  const updateCart = async () => {
    if (!ref) {
      const clothingItem = await ClothesAPI.getSelectedProduct(productID);
      ClothesAPI.addCartItem(clothingItem);
    } else if (ref) {
      const quantity = ref.current.valueAsNumber;
      if (quantity >= 0) {
        const clothingItem = await ClothesAPI.getSelectedProduct(urlParam.paramId);
        ClothesAPI.addCartItem(clothingItem, quantity);
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