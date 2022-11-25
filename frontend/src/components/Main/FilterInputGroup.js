import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const FilterInputGroup = (props) => {
  const title = props.title;
  const items = props.items;
  const currency = props.currency;
  const filter = props.filter;
  const setFilter = props.setFilter;
  const [activeSelection, setActiveSelection] = useState();
  const [initialSelection, setInitialSelection] = useState(true);

  const handleClick = (e) => {
    if (initialSelection) {
      setActiveSelection(e.target);
      setFilter([...filter, e.target.value]);
      setInitialSelection(false);
    } else if (!initialSelection) {
      // Remove activeSelection.value from filter array, then setActiveSelection to e.target, and then add new selection to filter
      let arrayCopy = [];
      const updatedArray = filter.filter(
        (element) => element !== activeSelection.value
      );
      arrayCopy = updatedArray;
      arrayCopy.push(e.target.value);
      setActiveSelection(e.target);
      setFilter(arrayCopy);
    }
  };

  const clearInput = () => {
    activeSelection.checked = false;
    const clearedInputElementArray = filter.filter(
      (element) => element !== activeSelection.value
    );
    setFilter(clearedInputElementArray);
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div className="category__dropdown__item" key={item}>
            <input
              type="radio"
              id={item}
              name={title}
              value={item}
              onChange={handleClick}
            ></input>
            <label htmlFor={item}>
              {currency && "$"}
              {capitalizeFirstLetter(item)}
            </label>
          </div>
        );
      })}
      <button className="clear-filter-btn" onClick={clearInput}>Clear filter</button>
    </>
  );
};

export { FilterInputGroup };
