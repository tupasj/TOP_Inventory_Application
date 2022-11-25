import { useState } from "react";
import { FilterInputGroup } from "./FilterInputGroup";

const FilterDropdown = (props) => {
  const title = props.title;
  const items = props.items;
  const currency = props.currency;
  const handleInput = props.handleInput;
  const filter = props.filter;
  const setFilter = props.setFilter;
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
          <FilterInputGroup
            title={title}
            items={items}
            currency={currency}
            handleInput={handleInput}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      )}
    </>
  );
};

export { FilterDropdown };
