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

const getSearchedProducts = async (searchQuery, type) => {
    if (type) {
        const searchedProduct = await axios.get(`http://localhost:4000/results/search_query=${searchQuery}&${type}`);
        return searchedProduct.data;
    } else {
        const searchedProduct = await axios.get(`http://localhost:4000/results/search_query=${searchQuery}`);
        return searchedProduct.data;
    }
};

// const makeOrder = (currentProduct, productQuantity) => {
//   const productSalePrice = currentProduct.salePrice
//     ? currentProduct.salePrice
//     : false;

//   const order = {
//     id: currentProduct.id,
//     name: currentProduct.name,
//     src: currentProduct.src,
//     alt: currentProduct.alt,
//     price: currentProduct.price,
//     salePrice: productSalePrice,
//     quantity: productQuantity,
//   };

//   return order;
// };

const ClothesAPI = {
    getClothesByType,
    getSelectedProduct,
    getSearchedProducts,
};

export default ClothesAPI;
