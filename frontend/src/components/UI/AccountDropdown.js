const AccountDropdown = (props) => {
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

  return (
    <div className="account-dropdown">
      <div className="account-dropdown__login" onClick={openLoginModal}>Log In</div>
      <div className="account-dropdown__signup" onClick={openSignupModal}>Sign Up</div>
    </div>
  );
};

export { AccountDropdown };
