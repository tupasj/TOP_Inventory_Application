import { useState, useReducer, useEffect } from "react";
import { ordersReducer } from "./reducers/ordersReducer";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/UI";
import { SignupModal } from "./components/UI/SignupModal";
import { Cart } from "./pages/Cart/Cart";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [orders, dispatch] = useReducer(ordersReducer, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const [clothes, setClothes] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);

  const addOrder = (order) => {
    dispatch({
      type: "added",
      newOrder: order,
    });
  };

  const removeOrder = (orderId) => {
    dispatch({
      type: "deleted",
      id: orderId,
    });
  };

  const replaceOrders = (orderArray) => {
    dispatch({
      type: "set",
      newOrders: orderArray,
    });
  };

  const modifyOrderQuantityOnChange = (e, order) => {
    dispatch({
      type: "change quantity",
      payload: {
        id: order.id,
        quantity: e.target.valueAsNumber,
      },
    });
  };

  useEffect(() => {
    console.log('currentUser: ', currentUser);
  }, [currentUser]);

  return (
    <HashRouter baseName="/TOP_Shopping_Cart">
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <Header
          itemCount={itemCount}
          setSearchQuery={setSearchQuery}
          type={type}
          setType={setType}
          setClothes={setClothes}
        />
      </UserContext.Provider>
      <Navigation setType={setType} />
      <Routes>
        <Route
          path="/*"
          element={
            <Main
              itemCount={itemCount}
              setItemCount={setItemCount}
              orders={orders}
              replaceOrders={replaceOrders}
              addOrder={addOrder}
              searchQuery={searchQuery}
              type={type}
              clothes={clothes}
              setClothes={setClothes}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              itemCount={itemCount}
              setItemCount={setItemCount}
              orders={orders}
              replaceOrders={replaceOrders}
              removeOrder={removeOrder}
              modifyOrderQuantityOnChange={modifyOrderQuantityOnChange}
            />
          }
        />
      </Routes>
      <LoginModal setCurrentUser={setCurrentUser} />
      <SignupModal />
    </HashRouter>
  );
};

export { App };
