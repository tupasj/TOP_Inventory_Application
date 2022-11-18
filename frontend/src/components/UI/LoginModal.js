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
    <dialog className="login-modal">
      <span className="modal-close" onClick={closeLoginModal}>
        <i className="fa-solid fa-x"></i>
      </span>
      <p className="login-modal-message">Log in to Lorem Ipsum Clothing</p>
      <LoginForm
        setCurrentUser={setCurrentUser}
        closeLoginModal={closeLoginModal}
      />
    </dialog>
  );
};

export { LoginModal };
