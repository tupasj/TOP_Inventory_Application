import { CartItems } from "./CartItems";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";

const Cart = (props) => {
  const currentUser = props.currentUser;
  
  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
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
