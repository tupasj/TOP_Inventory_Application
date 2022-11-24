import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";

const CartItems = (props) => {
  const { orders, modifyOrderQuantityOnChange } = useContext(CartContext);
  const currentUser = props.currentUser;

  return (
    <div className="cart-items">
      {orders[0] ? (
        orders.map((order) => {
          return (
            <div key={order.clothingItem._id} className="order">
              <img
                className="order__img"
                src={order.clothingItem.src}
                alt={order.clothingItem.alt}
              ></img>
              <div className="order__info">
                <span className="order__name">{order.clothingItem.name}</span>
                <span className="order__price">
                  {order.clothingItem.salePrice ? (
                    <>
                      ${order.clothingItem.salePrice}
                      <span className="order__price--line-through">
                        ${order.clothingItem.price}
                      </span>
                    </>
                  ) : (
                    <span>${order.clothingItem.price}</span>
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
                  defaultValue={order.quantity ? order.quantity : 1}
                  onChange={(e) => {
                    modifyOrderQuantityOnChange(e, order);
                  }}
                ></input>
              </div>
              <CartRemoveOrderBtn
                orderID={order._id}
                currentUser={currentUser}
              />
            </div>
          );
        })
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export { CartItems };
