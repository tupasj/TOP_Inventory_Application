import { SignupForm } from "../Form/SignupForm";

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
      <SignupForm closeSignupModal={closeSignupModal} />
    </dialog>
  );
};

export { SignupModal };
