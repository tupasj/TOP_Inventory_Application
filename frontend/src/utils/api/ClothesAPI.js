import axios from "axios";

const getClothesByType = async (clothesType) => {
    if (clothesType) {
        const clothesByTypeResponse = await axios.get(`http://localhost:4000/products/${clothesType}`);
        return clothesByTypeResponse.data;
    } else {
        const allClothesResponse = await axios.get(`http://localhost:4000/products`);
        return allClothesResponse.data;
    }
};

const getSelectedProduct = async (productID) => {
    const selectedProductResponse = await axios.get(`http://localhost:4000/product-view/${productID}`);
    return selectedProductResponse.data;
};

const getSearchedProducts = async (searchValue, type) => {
    if (type) {
        const searchedProduct = await axios.get(`http://localhost:4000/results/search_query=${searchValue}/${type}`);
        return searchedProduct.data;
    } else {
        const searchedProduct = await axios.get(`http://localhost:4000/results/search_query=${searchValue}`);
        return searchedProduct.data;
    }
};

const createUser = (payload) => {
    axios.post(`http://localhost:4000/user`, payload);
};

const ClothesAPI = {
    getClothesByType,
    getSelectedProduct,
    getSearchedProducts,
    createUser,
};

export default ClothesAPI;
