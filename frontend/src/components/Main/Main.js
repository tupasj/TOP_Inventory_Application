/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Filter } from "./Filter";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { UserContext } from "../../context/UserContext";
import { calculateItemCount } from "../../utils/cartUtils";
import { RoutingError } from "../Routes/RoutingError";
import { NoProductMatch } from "../Routes/NoProductMatch";
import { Products } from "./Products";
import ClothesAPI from "../../utils/api/ClothesAPI";

const Main = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.replaceOrders;
  const addOrder = props.addOrder;
  const type = props.type;
  const clothes = props.clothes;
  const setClothes = props.setClothes;
  const currentUser = props.currentUser;
  const [filter, setFilter] = useState([]);
  const [removedFilter, setRemovedFilter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  });

  useEffect(() => {
    navigate('/all');
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
          <UserContext.Provider value={{currentUser}} >
            <ProductFilterContext.Provider value={{filter, removedFilter}}>
              <Routes>
                <Route path="/*" element={<Products products={clothes} />} />
                <Route path="/product-view/:paramId" element={<ProductView />} />
                <Route path={`/results/search_query`} element={<Products products={clothes} />} />
                <Route path='/error/no-product-match' element={<NoProductMatch />} />
                <Route path="*" element={<RoutingError />} />
              </Routes>
            </ProductFilterContext.Provider>
          </UserContext.Provider>
        </UsesCartButtonContext.Provider>
    </main>
  );
};

export { Main };