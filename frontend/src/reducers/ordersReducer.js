/* eslint-disable no-fallthrough */
import ClothesAPI from "../utils/api/ClothesAPI";

const ordersReducer = (orders, action) => {
  switch (action.type) {
    case "added": {
      if (action.payload.currentUser) {
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
      const updateItem = async (quantity, clothingItem, currentUser) => {
        await ClothesAPI.updateCartItem(
          quantity,
          clothingItem,
          currentUser.email
        );
      };
      if (action.payload.currentUser) {
        updateItem(
          action.payload.quantity,
          action.payload.orderToUpdate,
          action.payload.currentUser
        );
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
