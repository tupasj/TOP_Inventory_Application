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

const createUser = async (user) => {
    await axios.post(`http://localhost:4000/user`, user);
};

const addCartItem = async (clothingItem, quantity) => {
    if (quantity) {
        const cartItem = {
            clothingItem: clothingItem,
            quantity: quantity,
        };
        await axios.post(`http://localhost:4000/cart`, cartItem);
    } else {
        await axios.post(`http://localhost:4000/cart`, clothingItem);
    }
};

const ClothesAPI = {
    getClothesByType,
    getSelectedProduct,
    getSearchedProducts,
    createUser,
    addCartItem,
};

export default ClothesAPI;
