import { useState, useEffect, useReducer } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ordersReducer } from "./reducers/ordersReducer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/UI";
import { SignupModal } from "./components/UI/SignupModal";
import { Cart } from "./pages/Cart/Cart";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import ClothesAPI from "./utils/api/ClothesAPI";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("all");
  const [clothes, setClothes] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [orders, dispatch] = useReducer(ordersReducer, []);

  const addOrder = (currentUser, order, quantity) => {
    dispatch({
      type: "added",
      payload: {
        currentUser: currentUser,
        newOrder: order,
        quantity: quantity,
      },
    });
  };

  const removeOrder = (orderId, currentUser) => {
    dispatch({
      type: "deleted",
      payload: {
        id: orderId,
        currentUser: currentUser,
      },
    });
  };

  const replaceOrders = (orderArray, currentUser) => {
    dispatch({
      type: "set",
      payload: {
        newOrders: orderArray,
        currentUser: currentUser,
      },
    });
  };

  const updateOrder = (quantity, orderToUpdate, currentUser) => {
    dispatch({
      type: "update",
      payload: {
        quantity,
        orderToUpdate,
        currentUser,
      },
    });
  };

  const modifyOrderQuantityOnChange = (e, order) => {
    dispatch({
      type: "change quantity",
      payload: {
        id: order.clothingItem._id,
        quantity: e.target.valueAsNumber,
      },
    });
  };

  const getUserCart = async (userEmail) => {
    const userCart = await ClothesAPI.getUserCart(userEmail);
    if (userCart.length >= 1) {
      replaceOrders(userCart);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getUserCart(currentUser.email);
    } else if (!currentUser) {
      replaceOrders([]);
    }

    console.log("currentUser: ", currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    const updateItemCount = () => {
      const orderQuantities = orders.map((order) => order.quantity);
      const initialValue = 0;
      const overallQuantity = orderQuantities.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
      setItemCount(overallQuantity);
    };
    updateItemCount();

    console.log("orders: ", orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <HashRouter baseName="/TOP_Shopping_Cart">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header
          itemCount={itemCount}
          setSearchQuery={setSearchQuery}
          type={type}
          setType={setType}
          setClothes={setClothes}
          orders={orders}
        />
      </UserContext.Provider>
      <Navigation setType={setType} />
      <CartContext.Provider
        value={{
          orders,
          addOrder,
          removeOrder,
          replaceOrders,
          updateOrder,
          modifyOrderQuantityOnChange,
        }}
      >
        <Routes>
          <Route
            path="/*"
            element={
              <Main
                itemCount={itemCount}
                setItemCount={setItemCount}
                searchQuery={searchQuery}
                type={type}
                clothes={clothes}
                setClothes={setClothes}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/cart" element={<Cart currentUser={currentUser} />} />
        </Routes>
      </CartContext.Provider>
      <LoginModal setCurrentUser={setCurrentUser} />
      <SignupModal />
    </HashRouter>
  );
};

export { App };
