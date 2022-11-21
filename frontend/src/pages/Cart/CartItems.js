import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";

const CartItems = () => {
  const { orders, modifyOrderQuantityOnChange } =
    useContext(CartContext);

  return (
    <div className="cart-items">
      {orders[0] ? (
        orders.map((order) => {
          return (
            <div key={order._id} className="order">
              <img className="order__img" src={order.src} alt={order.alt}></img>
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
                  defaultValue={order.quantity ? order.quantity : 1}
                  onChange={(e) => {
                    modifyOrderQuantityOnChange(e, order);
                  }}
                ></input>
              </div>
              <CartRemoveOrderBtn id={order._id} />
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
