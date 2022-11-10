const CartTotal = (props) => {
  const subtotal = props.subtotal;

  return (
    <div className="cart__total">
      <div className="cart__subtotal__container">
        <div className="cart__subtotal__title">Subtotal:</div>
        <div className="cart__subtotal__value">${subtotal}.00</div>
      </div>
      <button className="cart__checkout-button">Proceed to checkout</button>
    </div>
  );
};

export { CartTotal };