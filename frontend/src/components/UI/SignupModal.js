const SignupModal = () => {
  const closeSignupModal = () => {
    const signupModal = document.querySelector(".signup-modal");
    const passwordMessage = document.querySelector(".password-message");
    passwordMessage.textContent = "";
    signupModal.close();
  };

  return (
    <dialog className="signup-modal">
      <span className="modal-close" onClick={closeSignupModal}>
        <i className="fa-solid fa-x"></i>
      </span>
      <p className="signup-modal-message">
        Create a Lorem Ipsum Clothing store account
      </p>
      <form method="dialog">
        <label htmlFor="name">
          <input type="text" id="name" name="name" placeholder="Name"></input>
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          ></input>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          ></input>
        </label>
        <div className="password-message"></div>
        <div className="button-group">
          <button className="signup-button">Sign Up</button>
        </div>
      </form>
    </dialog>
  );
};

export { SignupModal };
