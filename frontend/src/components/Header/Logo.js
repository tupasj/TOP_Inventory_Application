import { Link } from "react-router-dom";

const Logo = (props) => {
  const setType = props.setType;

  return (
    <Link to="/all" onClick={() => setType("all")}>
      <div className="logo">
        <span>
          <span className="text-red">L</span>orem{" "}
          <span className="text-[#fff]">I</span>psum
        </span>
        <span className="text-center">Clothing</span>
      </div>
    </Link>
  );
};

export { Logo };