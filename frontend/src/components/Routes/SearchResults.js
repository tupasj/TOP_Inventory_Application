// import { useEffect, useContext } from "react";
// import { ProductFilterContext } from "../../context/ProductFilterContext";
// import { useNavigate } from "react-router-dom";
// import { FilteredProducts } from "../Main/FilteredProducts";
// import { Products } from "../Main/Products";
// import { getSearchResults } from "../../utils/productUtils";
// import ClothesAPI from "../../api/ClothesAPI";

const SearchResults = (props) => {
  // const { filter } = useContext(ProductFilterContext);
  // const searchQuery = props.searchQuery;
  // const type = props.type;
  // const productsOfType = ClothesAPI.getProductsByType(type);
  // const searchResults = getSearchResults(searchQuery, productsOfType);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (searchResults.length === 0) {
  //     navigate('/products-no-match');
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchResults]);

  return (
    <>
    <p>SearchResults</p>
      {/* {filter[0] ? (
        <FilteredProducts filter={filter} products={searchResults} />
      ) : (
        <Products products={searchResults} />
      )} */}
    </>
  );
};

export { SearchResults };
