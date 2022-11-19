import { useEffect } from "react";
import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";
import ClothesAPI from "../../utils/api/ClothesAPI";

const CartItems = (props) => {
  const currentUser = props.currentUser;

  useEffect(() => {
    const getUserCart = async (userEmail) => {
      const userCart = await ClothesAPI.getUserCart(userEmail);
      console.log(userCart);
    };
    getUserCart(currentUser.email);
  }, []);

  return (
    <div className="cart-items">
      {currentUser.cart[0] ? <div>currentUser.cart[0]: {currentUser.cart[0]}</div> : <div>Your cart is empty.</div>}
      {/* {currentUser.cart[0] ? (
        currentUser.cart.map((order) => {
          return (
            <div key={order.name} className="order">
              <img
                className="order__img"
                src={order.src}
                alt="lorem ipsum"
              ></img>
              <div className="order__info">
                <span className="order__name">{order.name}</span>
                <span className="order__price">
                  {order.salePrice ? (
                    <>
                      ${order.salePrice}
                      <span className="order__price--line-through">
                        ${order.price}
                      </span>
                    </>
                  ) : (
                    <span>${order.price}</span>
                  )}
                </span>
                <label htmlFor="order__quantity">Quantity: </label>
                <input
                  className="input__quantity"
                  type="number"
                  id="order__quantity"
                  name="order__quantity"
                  min="1"
                  max="100"
                  defaultValue={order.quantity}
                ></input>
                <CartRemoveOrderBtn
                  id={order.id}
                  inputDefaultVal={order.quantity}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div>Your cart is empty.</div>
      )} */}
    </div>
  );
};

export { CartItems };
