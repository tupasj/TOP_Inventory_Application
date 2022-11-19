import { useState, useEffect } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const [clothes, setClothes] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    console.log("currentUser: ", currentUser);
  }, [currentUser]);

  return (
    <HashRouter baseName="/TOP_Shopping_Cart">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
      <LoginModal setCurrentUser={setCurrentUser} />
      <SignupModal />
    </HashRouter>
  );
};

export { App };
