const checkDuplicateOrders = (ordersArray, currentProductID) => {
  for (let i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].id === currentProductID) {
      return true;
    }
  }
  return false;
};

const updateOrderElementQuantity = (product, amount, ordersState, replaceOrdersState) => {
  const mutatedOrders = [...ordersState];
  const matchedOrder = mutatedOrders.find((order) => order.id === product.id);
  const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
  const updatedQuantity = (matchedOrder.quantity += amount);
  const updatedOrder = {...matchedOrder, quantity: updatedQuantity};
  mutatedOrders[matchedOrderIndex] = updatedOrder;
  replaceOrdersState([...mutatedOrders]);
};

const updateOrderElementQuantityById = (elementID, ordersState, replaceOrdersState) => {
  const mutatedOrders = [...ordersState];
  const matchedOrder = mutatedOrders.find((order) => order.id === elementID);
  const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
  const updatedQuantity = (matchedOrder.quantity += 1);
  const updatedOrder = {...matchedOrder, quantity: updatedQuantity};
  mutatedOrders[matchedOrderIndex] = updatedOrder;
  replaceOrdersState([...mutatedOrders]);
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

export { checkDuplicateOrders, updateOrderElementQuantity, updateOrderElementQuantityById, calculateSubtotal, calculateItemCount };
