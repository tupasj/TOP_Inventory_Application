import { useEffect } from "react";
import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";
import { calculateSubtotal, calculateItemCount } from "../../utils/cartUtils";

const CartOrders = (props) => {
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const setSubtotal = props.setSubtotal;
  const modifyOrderQuantityOnChange = props.modifyOrderQuantityOnChange;

  useEffect(() => {
    calculateSubtotal(orders, setSubtotal);
    calculateItemCount(orders, setItemCount);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <div className="orders">
      {orders.map((order) => {
        return (
          <div key={order.name} className="order">
            <img className="order__img" src={order.src} alt="lorem ipsum"></img>
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
                onChange={(e) => {
                  modifyOrderQuantityOnChange(e, order);
                }}
              ></input>
              <CartRemoveOrderBtn
                id={order.id}
                inputDefaultVal={order.quantity}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { CartOrders };
