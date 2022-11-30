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
    <div className="flex gap-[22px] cursor-pointer">
      <div className="relative" onClick={toggleDropdown}>
        <i className="fa-solid fa-user"></i>
        <i className="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      {dropdownActive && (
        <AccountDropdown setDropdownActive={setDropdownActive} />
      )}
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping">
          <span
            className="p-1 absolute left-3 bottom-2 rounded-[50%] bg-red
          text-xs font-bold text-[#fff]"
          >
            {itemCount}
          </span>
        </i>
      </Link>
    </div>
  );
};

export { HeaderButtons };
