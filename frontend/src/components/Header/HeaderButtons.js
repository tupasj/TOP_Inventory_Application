import { Link } from "react-router-dom";

const HeaderButtons = (props) => {
  const itemCount = props.itemCount;

  const openLoginModal = () => {
    const loginModal = document.querySelector(".login-modal");
    loginModal.showModal();
  };
  
  return (
    <div className="header-buttons">
      <i className="fa-solid fa-user modal-open" onClick={openLoginModal}></i>
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping">
          <span className="cart-counter">{itemCount}</span>
        </i>
      </Link>
    </div>
  );
};

export { HeaderButtons };