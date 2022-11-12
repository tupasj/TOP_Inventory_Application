/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Filter } from "./Filter";
import { Routes, Route } from "react-router-dom";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { calculateItemCount } from "../../utils/cartUtils";
import { RoutingError } from "../Routes/RoutingError";
import { SearchResults } from "../Routes/SearchResults";
import { NoProductMatch } from "../Routes/NoProductMatch";
import { Products } from "./Products";
import ClothesAPI from "../../utils/api/ClothesAPI";

const Main = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.replaceOrders;
  const addOrder = props.addOrder;
  const searchQuery = props.searchQuery;
  const type = props.type;
  const [filter, setFilter] = useState([]);
  const [removedFilter, setRemovedFilter] = useState(false);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  });

  useEffect(() => {
    const getAllClothes = async () => {
      const allClothes = await ClothesAPI.getClothesByType();
      setClothes(allClothes);
    };
    getAllClothes();
  }, []);

  useEffect(() => {
    const getClothesByType = async (clothesType) => {
      const clothesByType = await ClothesAPI.getClothesByType(clothesType);
      setClothes(clothesByType);
    };
    getClothesByType(type);
  }, [type]);

  return (
    <main className="products-view">
      <Filter filter={filter} setFilter={setFilter} setRemovedFilter={setRemovedFilter} />
        <UsesCartButtonContext.Provider value={{itemCount, setItemCount, orders, replaceOrders, addOrder}}>
          <ProductFilterContext.Provider value={{filter, removedFilter}}>
            <Routes>
              <Route path="/*" element={<Products products={clothes} />} />
              <Route path="/product-view/:paramId" element={<ProductView products={clothes} />} />
              <Route path={`/results/search_query=${searchQuery}`} element={<SearchResults searchQuery={searchQuery} type={type}/> } />
              <Route path='/products-no-match' element={<NoProductMatch searchQuery={searchQuery} />} />
              <Route path="*" element={<RoutingError />} />
            </Routes>
          </ProductFilterContext.Provider>
        </UsesCartButtonContext.Provider>
    </main>
  );
};

export { Main };
