import axios from "axios";
import { axiosErrorHandler } from "../errors";
import { makeFilterQueryParamsString } from "../filterUtils";

const getClothesByType = async (clothesType) => {
  if (clothesType === "all") {
    const allClothesResponse = await axios.get(
      `http://localhost:4000/products`
    );
    return allClothesResponse.data;
  } else {
    const clothesByTypeResponse = await axios.get(
      `http://localhost:4000/products/${clothesType}`
    );
    return clothesByTypeResponse.data;
  }
};

const getFilteredProducts = async (filter) => {
  const filterQueryParamsString = makeFilterQueryParamsString(filter);
  const filteredProductsResponse = await axios.get(filterQueryParamsString);
  return filteredProductsResponse.data;
};

const getSelectedProduct = async (productID) => {
  const selectedProductResponse = await axios.get(
    `http://localhost:4000/product-view/${productID}`
  );
  return selectedProductResponse.data;
};

const getSearchedProducts = async (searchValue, type) => {
  const searchedProductResponse = await axios.get(
    `http://localhost:4000/results/search_query=${searchValue}/${type}`
  );
  return searchedProductResponse.data;
};

const verifyUserCredentials = async (email, password) => {
  try {
    const userResponse = await axios.get(
      `http://localhost:4000/user/email=${email}/password=${password}`
    );
    return userResponse.data[0];
  } catch (error) {
    console.log("verifyUserCredentials() error");
    axiosErrorHandler(error);
  }
};

const createUser = async (user) => {
  await axios.post(`http://localhost:4000/user`, user);
};

const addCartItem = async (userEmail, clothingItem, quantity) => {
  try {
    if (quantity) {
      const payload = {
        clothingItem,
        quantity,
      };
      await axios.post(
        `http://localhost:4000/user/email=${userEmail}`,
        payload
      );
    } else {
      const payload = {
        clothingItem,
      };
      await axios.post(
        `http://localhost:4000/user/email=${userEmail}`,
        payload
      );
    }
  } catch (error) {
    console.log("addCartItem() error");
    axiosErrorHandler(error);
  }
};

const getUser = async (userEmail) => {
  try {
    const userResponse = await axios.get(
      `http://localhost:4000/user/email=${userEmail}`
    );
    return userResponse.data;
  } catch (error) {
    console.log("getUser() error");
    axiosErrorHandler(error);
  }
};

const getUserCart = async (userEmail) => {
  try {
    const userCartResponse = await axios.get(
      `http://localhost:4000/user/email=${userEmail}/user-cart`
    );
    return userCartResponse.data;
  } catch (error) {
    console.log("getUserCart() error");
    axiosErrorHandler(error);
  }
};

const updateCartItem = async (quantity, clothingItem, userEmail) => {
  try {
    const payload = {
      quantity,
      clothingItem,
    };
    await axios.patch(`http://localhost:4000/user/email=${userEmail}`, payload);
  } catch (error) {
    console.log("updateCartItem() error");
    axiosErrorHandler(error);
  }
};

const deleteCartItem = async (userEmail, cartItemID) => {
  try {
    await axios.delete(`http://localhost:4000/user/email=${userEmail}`, {
      data: { cartItemID },
    });
  } catch (error) {
    console.log("deleteCartItem() error");
    axiosErrorHandler(error);
  }
};

const ClothesAPI = {
  getClothesByType,
  getFilteredProducts,
  getSelectedProduct,
  getSearchedProducts,
  verifyUserCredentials,
  createUser,
  addCartItem,
  getUser,
  getUserCart,
  updateCartItem,
  deleteCartItem,
};

export default ClothesAPI;
