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

// const getCurrentProduct = (urlParam) => {
//   const currentProduct = _allProducts.find(
//     (product) => product.id === urlParam.paramId
//   );
//   return currentProduct;
// };

// const getCurrentProductById = (productID) => {
//   const currentProduct = _allProducts.find(
//     (product) => product.id === productID
//   );
//   return currentProduct;
// };

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

// const getClothingByType = (type) => {
//   const allClothes = MensClothing.Set1.concat(WomensClothing.Set1);

//   switch (type) {
//     case "all":
//       return allClothes;
//     case "men":
//       return MensClothing.Set1;
//     case "women":
//       return WomensClothing.Set1;
//     case "brandNew":
//       return allClothes.filter((element) => element.brandNew);
//     case "onSale":
//       return allClothes.filter((element) => element.salePrice);
//     default:
//       console.log("Could not get products by type");
//   }
// };

const ClothesAPI = {
    getClothesByType,
};

export default ClothesAPI;
