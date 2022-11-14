import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const type = props.type;
  const setSearchQuery = props.setSearchQuery;
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type !== "keydown") {
      if (searchValue !== "" && typeof searchValue !== "number") {
        if (type) {
          setSearchQuery({
            searchValue: searchValue,
            type: type,
          });
          navigate(`/results/search_query=${searchValue}&type=${type}`);
        } else {
          setSearchQuery(searchValue);
          navigate(`/results/search_query=${searchValue}`);
        }
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
