const checkDuplicateOrders = (ordersArray, ProductID) => {
  for (let i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i]._id === ProductID) {
      return true;
    }
  }
  return false;
};

const updateOrderQuantity = (
  orderID,
  quantityToAdd,
  ordersState,
  setOrdersState
) => {
  const mutatedOrders = [...ordersState];
  const matchedOrder = mutatedOrders.find((order) => order._id === orderID);
  const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
  const updatedQuantity = (matchedOrder.quantity += quantityToAdd);
  const updatedOrder = { ...matchedOrder, quantity: updatedQuantity };
  mutatedOrders[matchedOrderIndex] = updatedOrder;
  setOrdersState([...mutatedOrders]);
  return updatedOrder;
};

const calculateSubtotal = (ordersState, setSubtotalState) => {
  let accumulatorValue = 0;
  for (let i = 0; i < ordersState.length; i++) {
    const hasSalePrice = ordersState[i].salePrice ? true : false;
    let productPrice;
    if (hasSalePrice) {
      productPrice = ordersState[i].salePrice;
    } else {
      productPrice = ordersState[i].price;
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
