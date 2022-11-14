import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountDropdown } from "../UI/AccountDropdown";

const HeaderButtons = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const itemCount = props.itemCount;

  const toggleDropdown = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else {
      setDropdownActive(true);
    }
  };

  return (
    <div className="header-buttons">
      <div className="account-dropdown-icons" onClick={toggleDropdown}>
        <i className="fa-solid fa-user"></i>
        <i className="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      {dropdownActive && <AccountDropdown />}
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping">
          <span className="cart-counter">{itemCount}</span>
        </i>
      </Link>
    </div>
  );
};

export { HeaderButtons };
