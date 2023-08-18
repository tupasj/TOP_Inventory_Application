import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClothesAPI from '../../utils/api/ClothesAPI';

const Search = (props) => {
  const type = props.type;
  const setClothes = props.setClothes;
  const setSearchQuery = props.setSearchQuery;
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const getSearchedProducts = async (searchQuery, type) => {
    let searchedProducts;
    if (type) {
      searchedProducts = await ClothesAPI.getSearchedProducts(
        searchQuery,
        type
      );
    } else {
      searchedProducts = await ClothesAPI.getSearchedProducts(searchQuery);
    }
    setClothes(searchedProducts);
    if (searchedProducts.length === 0) {
      navigate('/error/no-product-match');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter' || e.type !== 'keydown') {
      if (searchValue !== '' && typeof searchValue !== 'number') {
        setSearchQuery(searchValue);
        navigate(`/results/search_query=${searchValue}&type=${type}`);
        getSearchedProducts(searchValue, type);
      }
    }
  };

  return (
    <div className="inline-block w-1/2 p-1 border-[1px] border-solid border-dark-gray/50 rounded-lg relative">
      <button
        className="px-1 mt-[2px] border-0 rounded-lg"
        onClick={handleSubmit}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        className="w-[95%] pl-1 border-0 rounded-lg
        focus-visible:outline-none"
        type="text"
        placeholder="Search for a product"
        onChange={handleChange}
        onKeyDown={handleSubmit}
      ></input>
    </div>
  );
};

export { Search };
