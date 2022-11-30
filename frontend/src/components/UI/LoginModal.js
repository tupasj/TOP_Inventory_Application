import { LoginForm } from "../Form/LoginForm";

const LoginModal = (props) => {
  const setCurrentUser = props.setCurrentUser;

  const closeLoginModal = () => {
    const loginModal = document.querySelector(".login-modal");
    const passwordMessage = document.querySelector(".password-message");
    passwordMessage.textContent = "";
    loginModal.close();
  };

  return (
    <dialog className="login-modal w-[420px] border-0 rounded
    shadow-[0px 0px 5px rgba(0, 0, 0, 0.65)]">
      <span className="float-right cursor-pointer" onClick={closeLoginModal}>
        <i className="fa-solid fa-x"></i>
      </span>
      <p className="px-12 mb-3 text-center font-bold">
        Log in to Lorem Ipsum Clothing
      </p>
      <LoginForm
        setCurrentUser={setCurrentUser}
        closeLoginModal={closeLoginModal}
      />
    </dialog>
  );
};

export { LoginModal };
