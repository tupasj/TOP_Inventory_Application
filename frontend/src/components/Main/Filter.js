import { FilterDropdown } from "./FilterDropdown";

const Filter = (props) => {
  const filter = props.filter;
  const setFilter = props.setFilter;

  const handleInput = (e) => {
      setFilter([...filter, e.target.value]);
  };

  const categories = [
    {
      title: "Category",
      items: ["tops", "pants", "shorts", "accessories"],
      handleInput: handleInput,
    },
    {
      title: "Style",
      items: ["casual", "formal", "semi-formal", "indoor"],
      handleInput: handleInput,
    },
    {
      title: "Minimum Rating",
      items: ["3.0", "3.5", "4.0", "4.5", "5.0"],
      handleInput: handleInput,
    },
    {
      title: "Maximum Price",
      items: ["50", "100", "150", "200", "250", "300"],
      handleInput: handleInput,
      currency: true,
    },
  ];

  return (
    <div className="category-filter">
      {categories.map((category) => {
        return (
          <div className="category" key={category.title}>
            <FilterDropdown
              title={category.title}
              items={category.items}
              currency={category.currency}
              handleInput={handleInput}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Filter };
