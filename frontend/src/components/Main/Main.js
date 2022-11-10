import { useState, useEffect } from "react";
import { Filter } from "./Filter";
import { Routes, Route } from "react-router-dom";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { calculateItemCount } from "../../utils/cartUtils";
import { RoutingError } from "../Routes/RoutingError";
import { ProductsAll, ProductsMen, ProductsWomen, ProductsBrandNew, ProductsOnSale } from "../../pages/Products";
import { SearchResults } from "../Routes/SearchResults";
import { NoProductMatch } from "../Routes/NoProductMatch";

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

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  })

  return (
    <main className="products-view">
      <Filter filter={filter} setFilter={setFilter} setRemovedFilter={setRemovedFilter} />
        <UsesCartButtonContext.Provider value={{itemCount, setItemCount, orders, replaceOrders, addOrder}}>
          <ProductFilterContext.Provider value={{filter, removedFilter}}>
            <Routes>
              <Route index element={<ProductsAll />} />
              <Route path="/all" element={<ProductsAll />} />
              <Route path="/men" element={<ProductsMen />} />
              <Route path="/women" element={<ProductsWomen />} />
              <Route path="/brand-new" element={<ProductsBrandNew />} />
              <Route path="/on-sale" element={<ProductsOnSale />} />
              <Route path="/product-view/:paramId" element={<ProductView />} />
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
