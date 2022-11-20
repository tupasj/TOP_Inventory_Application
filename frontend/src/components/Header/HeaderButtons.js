import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AccountDropdown } from "../UI/AccountDropdown";

const HeaderButtons = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const orders = props.orders;

  const toggleDropdown = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else {
      setDropdownActive(true);
    }
  };

  useEffect(() => {
    const orderQuantities = orders.map((order) => order.quantity);
    const initialValue = 0;
    const overallQuantity = orderQuantities.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    setItemCount(overallQuantity);
  }, [orders]);

  return (
    <div className="header-buttons">
      <div className="account-dropdown-icons" onClick={toggleDropdown}>
        <i className="fa-solid fa-user"></i>
        <i className="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      {dropdownActive && (
        <AccountDropdown setDropdownActive={setDropdownActive} />
      )}
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping">
          <span className="cart-counter">{itemCount}</span>
        </i>
      </Link>
    </div>
  );
};

export { HeaderButtons };
