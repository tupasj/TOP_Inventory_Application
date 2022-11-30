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
  };

  return (
    <div className="absolute top-11 px-1 py-2 bg-[#fff]">
      {currentUser && (
        <div className="px-2 mb-2 text-dark-gray font-bold cursor-default">
          Hello, {currentUser.name}
        </div>
      )}
      <div className="px-2 mb-1 text-dark-gray hover:bg-light-gray">
        {currentUser ? (
          <span>View Account</span>
        ) : (
          <span onClick={openLoginModal}>Log In</span>
        )}
      </div>
      <div className="px-2 text-dark-gray hover:text-light-gray">
        {currentUser ? (
          <span onClick={logout}>Log Out</span>
        ) : (
          <span onClick={openSignupModal}>Sign Up</span>
        )}
      </div>
    </div>
  );
};

export { AccountDropdown };
