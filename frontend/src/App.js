import { useState, useReducer } from "react";
import { ordersReducer } from "./reducers/ordersReducer";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/UI";
import { Cart } from "./pages/Cart/Cart";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [orders, dispatch] = useReducer(ordersReducer, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('');
  const [clothes, setClothes] = useState([]);

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

  // useEffect(() => {
  //   // Firebase auth state observer
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const loginModalMessage = document.querySelector(
  //         ".login-modal-message"
  //       );
  //       loginModalMessage.textContent = `You are logged in as: ${user.email}`;
  //       const userOrders = await readUserOrders();
  //       if (!userOrders) {
  //         return;
  //       }
  //       replaceOrders(userOrders);
  //     } else {
  //       console.log(`User: 0`);
  //     }
  //   });
  // }, []);

  return (
    <HashRouter baseName="/TOP_Shopping_Cart">
      <Header itemCount={itemCount} setSearchQuery={setSearchQuery} type={type} setType={setType} setClothes={setClothes} />
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
      <LoginModal replaceOrders={replaceOrders} setItemCount={setItemCount} />
    </HashRouter>
  );
};

export { App };