import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClothesAPI from "../../utils/api/ClothesAPI";

const Search = (props) => {
  const type = props.type;
  const setClothes = props.setClothes;
  const setSearchQuery = props.setSearchQuery;
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const getSearchedProducts = async (searchQuery, type) => {
    let searchedProducts;
    if (type) {
      searchedProducts = await ClothesAPI.getSearchedProducts(searchQuery, type);
    } else {
      searchedProducts = await ClothesAPI.getSearchedProducts(searchQuery);
    }
    setClothes(searchedProducts);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type !== "keydown") {
      if (searchValue !== "" && typeof searchValue !== "number") {
        setSearchQuery(searchValue);
        if (type) {
          navigate(`/results/search_query=${searchValue}&type=${type}`);
          getSearchedProducts(searchValue, type);
        } else {
          navigate(`/results/search_query=${searchValue}`);
          getSearchedProducts(searchValue);
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
