// import { useContext } from "react";
// import { ProductFilterContext } from "../../context/ProductFilterContext";
// import ClothesAPI from "../../api/ClothesAPI";
// import { FilteredProducts } from "../../components/Main/FilteredProducts";
// import { Products } from "../../components/Main/Products";

const ProductsOnSale = () => {
  // const { filter } = useContext(ProductFilterContext);
  // const products = ClothesAPI.getClothingByType("onSale");

  return (
    <>
    <p>ProductsOnSale</p>
      {/* {filter[0] ? (
        <FilteredProducts products={products} />
      ) : (
        <Products products={products} />
      )} */}
    </>
  );
};

export { ProductsOnSale };