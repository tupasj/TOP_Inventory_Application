import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const FilterDropdown = (props) => {
  const title = props.title;
  const items = props.items;
  const currency = props.currency;
  const handleInput = props.handleInput;
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else {
      setDropdownActive(true);
    }
  };

  return (
    <>
      <span className="category__text">{title}</span>
      <span className="category__plus" onClick={toggleDropdown}>
        {dropdownActive ? (
          <i className="fa-solid fa-minus"></i>
        ) : (
          <i className="fa-solid fa-plus"></i>
        )}
      </span>
      {dropdownActive && (
        <div className="category__dropdown">
          {items.map((item) => {
            return (
              <div className="category__dropdown__item" key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  value={item}
                  onChange={handleInput}
                ></input>
                <label htmlFor={item}>
                  {currency && "$"}
                  {capitalizeFirstLetter(item)}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export { FilterDropdown };
