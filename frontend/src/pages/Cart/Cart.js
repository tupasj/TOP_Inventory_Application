import { CartItems } from "./CartItems";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";

const Cart = (props) => {
  const currentUser = props.currentUser;
  
  return (
    <main className="px-6 py-4">
      <div className="my-2 font-bold">Your Cart</div>
      <div className="cart-container">
        <CartItems currentUser={currentUser} />
        <div className="cart__side-buttons">
          <CartTotal />
          <CartRecommended />
        </div>
      </div>
    </main>
  );
};

export { Cart };
