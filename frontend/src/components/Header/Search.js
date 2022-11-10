import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const setSearchQuery = props.setSearchQuery;
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type !== "keydown") {
      if ((searchValue !== '') && (typeof(searchValue) !== "number")) {
        setSearchQuery(searchValue);
        navigate(`/results/search_query=${searchValue}`);
      } else {
        navigate('no-product-match');
      }
    }
  };

  return (
    <div className="search-bar">
      <button className="search-bar__submit-button" onClick={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search for a product"
        onChange={handleChange}
        onKeyDown={handleSubmit}
      ></input>
      <div className="search-bar__divider"></div>
    </div>
  );
};

export { Search };