const checkDuplicateOrders = (ordersArray, ProductID) => {
  for (let i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].clothingItem._id === ProductID) {
      return true;
    }
  }
  return false;
};

const updateOrderQuantity = (
  orderID,
  quantityToAdd,
  ordersState,
) => {
  const ordersStateCopy = [...ordersState];
  const matchedOrder = ordersStateCopy.find((order) => order.clothingItem._id === orderID);
  const matchedOrderIndex = ordersStateCopy.indexOf(matchedOrder);
  const updatedQuantity = ordersState[matchedOrderIndex].quantity += quantityToAdd;
  const updatedOrder = { ...matchedOrder, quantity: updatedQuantity };
  ordersStateCopy[matchedOrderIndex] = updatedOrder;
  return [...ordersStateCopy];
};

const calculateSubtotal = (ordersState, setSubtotalState) => {
  let accumulatorValue = 0;
  for (let i = 0; i < ordersState.length; i++) {
    const hasSalePrice = ordersState[i].clothingItem.salePrice ? true : false;
    let productPrice;
    if (hasSalePrice) {
      productPrice = ordersState[i].clothingItem.salePrice;
    } else {
      productPrice = ordersState[i].clothingItem.price;
    }
    const productQuantity = ordersState[i].quantity;
    const orderCost = productPrice * productQuantity;
    accumulatorValue += orderCost;
  }
  setSubtotalState(accumulatorValue);
};

const calculateItemCount = (ordersState, setItemCountState) => {
  const quantityArray = ordersState.map((order) => order.quantity);
  const initialValue = 0;
  const quantitySum = quantityArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  setItemCountState(quantitySum);
};

export {
  checkDuplicateOrders,
  updateOrderQuantity,
  calculateSubtotal,
  calculateItemCount,
};
