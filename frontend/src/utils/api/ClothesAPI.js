import axios from "axios";
import { axiosErrorHandler } from "../errors";

const getClothesByType = async (clothesType) => {
    if (clothesType === "all") {
        const allClothesResponse = await axios.get(`http://localhost:4000/products`);
        return allClothesResponse.data;
    } else {
        const clothesByTypeResponse = await axios.get(`http://localhost:4000/products/${clothesType}`);
        return clothesByTypeResponse.data;
    }
};

const getSelectedProduct = async (productID) => {
    const selectedProductResponse = await axios.get(`http://localhost:4000/product-view/${productID}`);
    return selectedProductResponse.data;
};

const getSearchedProducts = async (searchValue, type) => {
    if (type) {
        const searchedProductResponse = await axios.get(`http://localhost:4000/results/search_query=${searchValue}/${type}`);
        return searchedProductResponse.data;
    } else {
        const searchedProductResponse = await axios.get(`http://localhost:4000/results/search_query=${searchValue}`);
        return searchedProductResponse.data;
    }
};

const verifyUserCredentials = async (email, password) => {
    try {
        const userResponse = await axios.get(`http://localhost:4000/user/email=${email}/password=${password}`);
        return userResponse.data[0];
    } catch (error) {
        axiosErrorHandler(error);
    }
};

const createUser = async (user) => {
    await axios.post(`http://localhost:4000/user`, user);
};

const addCartItem = async (userEmail, clothingItem, quantity) => {
    try {
        if (quantity) {
            const cartItemOrder = {
                userEmail,
                clothingItem,
                quantity,
            };
            await axios.post(`http://localhost:4000/user/email=${userEmail}`, cartItemOrder);
        } else {
            const cartItemOrder = {
                userEmail,
                clothingItem,
            };
            await axios.post(`http://localhost:4000/user/email=${userEmail}`, cartItemOrder);
        }
    } catch (error) {
        axiosErrorHandler(error);
    }
};

const getUser = async (userEmail) => {
    try {
        const userResponse = await axios.get(`http://localhost:4000/user/email=${userEmail}`);
        return userResponse.data;
    } catch (error) {
        axiosErrorHandler(error);
    }
};

const getUserCart = async (userEmail) => {
    try {
        const userCartResponse = await axios.get(`http://localhost:4000/user/email=${userEmail}/user-cart`);
        return userCartResponse.data;
    } catch (error) {
        axiosErrorHandler(error);
    }
};

const ClothesAPI = {
    getClothesByType,
    getSelectedProduct,
    getSearchedProducts,
    verifyUserCredentials,
    createUser,
    addCartItem,
    getUser,
    getUserCart,
};

export default ClothesAPI;
