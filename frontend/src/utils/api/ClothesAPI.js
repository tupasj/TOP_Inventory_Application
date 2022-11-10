// Rename to clothes util instead of api
// Interact with the database instead of getting locally stored data

// import MensClothing from "../assets/data/MensClothing.json";
// import WomensClothing from "../assets/data/WomensClothing.json";

// const _allProducts = MensClothing.Set1.concat(WomensClothing.Set1);

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

// const getProductsByType = (type) => {
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

// const ClothesAPI = {
//   getCurrentProduct: getCurrentProduct,
//   getCurrentProductById: getCurrentProductById,
//   makeOrder: makeOrder,
//   getProductsByType: getProductsByType,
// };

// export default ClothesAPI;
