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
            <div key={order.clothingItem._id} className="flex justify-around items-center
            rounded-lg my-2 py-5 pl-2 bg-[#fff]">
              <img
                className="h-[400px] w-[275px]"
                src={order.clothingItem.src}
                alt={order.clothingItem.alt}
              ></img>
              <div className="flex flex-col gap-4 mx-3 my-2">
                <span className="order__name">{order.clothingItem.name}</span>
                <span className="order__price">
                  {order.clothingItem.salePrice ? (
                    <>
                      ${order.clothingItem.salePrice}
                      <span className="ml-1 line-through text-xs opacity-50">
                        ${order.clothingItem.price}
                      </span>
                    </>
                  ) : (
                    <span>${order.clothingItem.price}</span>
                  )}
                </span>
                <label htmlFor="order__quantity">Quantity: </label>
                <input
                  className="rounded border-[1px] border-black/25 p-1
                  bg-slate-light-gray"
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
