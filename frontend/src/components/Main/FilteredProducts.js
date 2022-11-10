import { useEffect, useState, useContext } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { Products } from "./Products";
import { getFilterCategory, filterbyCategory } from "../../utils/filterUtils";

const FilteredProducts = (props) => {
  const { filter, removedFilter } = useContext(ProductFilterContext);
  const products = props.products;
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // For each filter, apply the filter to each product in the filteredProducts state
    for (let i = 0; i < filter.length; i++) {
      // Retrieve values
      const filterValue = filter[i];
      const filterCategory = getFilterCategory(filterValue);
      // Run function
      let appliedFilter;
      if (removedFilter) {
        appliedFilter = filterbyCategory(filteredProducts, filterCategory, filterValue); // Filters products array according to current filter.
      } else if (!removedFilter) {
        appliedFilter = filterbyCategory(products, filterCategory, filterValue);
      };

      setFilteredProducts(appliedFilter);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <Products products={filteredProducts} />
    </>
  );
};

export { FilteredProducts };
