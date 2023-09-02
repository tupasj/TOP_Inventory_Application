import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const AccountDropdown = (props) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const setDropdownActive = props.setDropdownActive;

  const logout = () => {
    setCurrentUser(false);
  };

  return (
    <div className="absolute top-11 py-2 bg-[#fff]">
      {currentUser && (
        <div className="px-2 mb-2 text-dark-gray font-bold cursor-default">
          Hello, {currentUser.name}
        </div>
      )}
      <div className="px-2 mb-1 text-dark-gray hover:bg-light-gray">
        {currentUser ? (
          <span>View Account</span>
        ) : (
          <Link to="/sign-in" onClick={() => setDropdownActive(false)}>
            <span>Log In</span>
          </Link>
        )}
      </div>
      <div className="px-2 text-dark-gray hover:bg-light-gray">
        {currentUser ? (
          <span onClick={logout}>Log Out</span>
        ) : (
          <Link to="/register" onClick={() => setDropdownActive(false)}>
            <span>Sign Up</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export { AccountDropdown };
