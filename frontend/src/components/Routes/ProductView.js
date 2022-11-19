import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { useParams } from "react-router-dom";
import { AddToCartButton } from "../UI/AddToCartButton";
import ClothesAPI from "../../utils/api/ClothesAPI";

const ProductView = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const quantityRef = useRef();
  const urlParam = useParams();
  const { itemCount, setItemCount, orders, replaceOrders, addOrder } =
    useContext(UsesCartButtonContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getSelectedProduct = async () => {
      const selectedProduct = await ClothesAPI.getSelectedProduct(
        urlParam.paramId
      );
      setSelectedProduct(selectedProduct);
    };
    getSelectedProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-view">
      <div className="product-view__main">
        <img
          className="product-view__img"
          src={selectedProduct.src}
          alt={selectedProduct.alt}
        ></img>
        <div className="product-view__buttons-container">
          <span className="product-view__product-name">
            {selectedProduct.name}
          </span>
          <div className="product-view__quantity-input-container">
            <label htmlFor="quantity">Quantity: </label>
            <input
              className="input__quantity"
              ref={quantityRef}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
            ></input>
          </div>
          <div className="product-view__buttons">
            <AddToCartButton
              ref={quantityRef}
              orders={orders}
              replaceOrders={replaceOrders}
              addOrder={addOrder}
              itemCount={itemCount}
              setItemCount={setItemCount}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
      <div className="product-view__details">
        <span className="product-view__title">Product Details</span>
        <p className="product-view__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          aliquet bibendum enim facilisis gravida neque convallis. At
          consectetur lorem donec massa sapien. Senectus et netus et malesuada
          fames ac turpis. Morbi enim nunc faucibus a pellentesque sit amet
          porttitor eget. Massa ultricies mi quis hendrerit dolor magna eget.
          Amet cursus sit amet dictum sit amet justo. Vitae auctor eu augue ut
          lectus arcu bibendum. In fermentum posuere urna nec tincidunt praesent
          semper feugiat. Dui accumsan sit amet nulla facilisi morbi tempus.
          Euismod quis viverra nibh cras pulvinar.
        </p>
        <ul className="product-view__bullets">
          <li>Bullet 1</li>
          <li>Bullet 2</li>
          <li>Bullet 3</li>
        </ul>
      </div>
    </div>
  );
};

export { ProductView };
