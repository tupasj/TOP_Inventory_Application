import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const AccountDropdown = (props) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const setDropdownActive = props.setDropdownActive;

  const openLoginModal = () => {
    const loginModal = document.querySelector(".login-modal");
    loginModal.showModal();
    setDropdownActive(false);
  };

  const openSignupModal = () => {
    const signupModal = document.querySelector(".signup-modal");
    signupModal.showModal();
    setDropdownActive(false);
  };
  
  const logout = () => {
    setCurrentUser(false);
  }

  return (
    <div className="account-dropdown">
      {currentUser && <div className="account-dropdown__user-greeting">Hello, {currentUser}</div>}
      <div className="account-dropdown__login">
        {currentUser ? <span>View Account</span> : <span onClick={openLoginModal}>Log In</span>}
      </div>
      <div className="account-dropdown__signup">
        {currentUser ? <span onClick={logout}>Log Out</span> : <span onClick={openSignupModal}>Sign Up</span>}
      </div>
    </div>
  );
};

export { AccountDropdown };
