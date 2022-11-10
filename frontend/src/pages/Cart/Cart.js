import { useEffect, useState } from "react";
import { CartOrders } from "./CartOrders";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";
import { UsesRemoveOrderButtonContext } from "../../context/UsesRemoveOrderButtonContext";

const Cart = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.orders;
  const removeOrder = props.removeOrder;
  const modifyOrderQuantityOnChange = props.modifyOrderQuantityOnChange;

  const [subtotal, setSubtotal] = useState("0.00");

  useEffect(() => {
    if (!orders[0]) {
      setSubtotal("0");
    }
  }, [orders])

  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
        <UsesRemoveOrderButtonContext.Provider
          value={{ itemCount, setItemCount, removeOrder }}
        >
          {orders[0] ? (
            <CartOrders
              setItemCount={setItemCount}
              orders={orders}
              replaceOrders={replaceOrders}
              subtotal={subtotal}
              setSubtotal={setSubtotal}
              modifyOrderQuantityOnChange={modifyOrderQuantityOnChange}
            />
          ) : (
            <div>Your cart is empty.</div>
          )}
        </UsesRemoveOrderButtonContext.Provider>
        <div className="cart__side-buttons">
          <CartTotal subtotal={subtotal} />
          <CartRecommended />
        </div>
      </div>
    </main>
  );
};

export { Cart };
