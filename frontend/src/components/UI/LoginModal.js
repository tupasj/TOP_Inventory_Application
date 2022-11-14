// import { auth, loginEmailPassword, createAccount, logout, signInViaGoogle } from "../../FirebaseServices/firebaseAuth";
import { GoogleButton } from 'react-google-button';

const LoginModal = (props) => {
  // const replaceOrders = props.replaceOrders;
  // const setItemCount = props.setItemCount;
  
  const closeLoginModal = () => {
    const loginModal = document.querySelector('.login-modal');
    const passwordMessage = document.querySelector('.password-message');
    passwordMessage.textContent = '';
    loginModal.close();
  };

  // const handleLogOut = () => {
  //   const loggedIn = auth.currentUser ? true : false;
  //   if (loggedIn) {
  //     logout();
  //     replaceOrders([]);
  //     setItemCount(0);
  //   };
  // };

  return (
    <dialog className="login-modal">
        <span className="modal-close" onClick={closeLoginModal}><i className="fa-solid fa-x"></i></span>
        <p className="login-modal-message">Log in or sign up for the Lorem Ipsum Clothing store</p>
        <form method="dialog">
            <label htmlFor="email">
              <input type="email" id="email" name="email" placeholder="Email"></input>
            </label>
            <label htmlFor="password">
              <input type="password" id="password" name="password" placeholder="Password"></input>
            </label>
            <div className="password-message"></div>
            <div className="button-group">
              {/* <button className="login-button" onClick={loginEmailPassword}>Log In</button>
              <button className="signup-button" onClick={createAccount}>Sign Up</button>
              <button className="logout-button" onClick={handleLogOut}>Log Out</button> */}
              <button className="login-button">Log In</button>
              <button className="signup-button">Sign Up</button>
              <button className="logout-button">Log Out</button>
            </div>
            {/* <GoogleButton className="google-button" onClick={signInViaGoogle} /> */}
            <GoogleButton className="google-button" />
        </form>
    </dialog>
  );
};

export { LoginModal };
