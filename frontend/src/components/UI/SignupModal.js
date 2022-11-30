import { SignupForm } from "../Form/SignupForm";

const SignupModal = () => {
  const closeSignupModal = () => {
    const signupModal = document.querySelector(".signup-modal");
    const passwordMessage = document.querySelector(".password-message");
    passwordMessage.textContent = "";
    signupModal.close();
  };

  return (
    <dialog
      className="signup-modal w-[420px] border-0 rounded
    shadow-[0px 0px 5px rgba(0, 0, 0, 0.65)]"
    >
      <span className="float-right cursor-pointer" onClick={closeSignupModal}>
        <i className="fa-solid fa-x"></i>
      </span>
      <p className="px-12 mb-3 text-center font-bold">
        Create a Lorem Ipsum Clothing store account
      </p>
      <SignupForm closeSignupModal={closeSignupModal} />
    </dialog>
  );
};

export { SignupModal };
