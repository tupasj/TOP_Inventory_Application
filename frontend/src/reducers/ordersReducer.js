/* eslint-disable no-fallthrough */
import ClothesAPI from "../utils/api/ClothesAPI";

const ordersReducer = (orders, action) => {
  switch (action.type) {
    case "added": {
      if (action.payload.currentUser) {
        console.log('action.payload: ', action.payload);
        ClothesAPI.addCartItem(
          action.payload.currentUser.email,
          action.payload.newOrder,
          action.payload.quantity
        );
      }
      return [...orders, action.payload.newOrder];
    }
    case "deleted": {
      return orders.filter((order) => order._id !== action.payload.id);
    }
    case "set": {
      return [...action.payload.newOrders];
    }
    case "update": {
      // Get quantity of updated order, backend updates the quantity of user.cart[i]._id that has the _id of updatedOrder
      console.log('updateItem');
      const updateItem = async (updatedOrder, currentUserEmail) => {
        await ClothesAPI.updateCartItem(updatedOrder, currentUserEmail);
      };
      if (action.payload.currentUser) {
        updateItem(action.payload.updatedOrder, action.payload.currentUser.email);
      }
    }
    case "change quantity": {
      if (action.payload.quantity >= 1) {
        const ordersWithUpdatedQuantity = orders.filter((order) =>
          order._id === action.payload.id
            ? (order.quantity = action.payload.quantity)
            : order.quantity
        );
        return ordersWithUpdatedQuantity;
      } else {
        const unmodifiedOrders = orders.filter((order) => order.quantity);
        return unmodifiedOrders;
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { ordersReducer };
