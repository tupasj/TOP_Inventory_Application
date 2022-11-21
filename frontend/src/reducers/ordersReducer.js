/* eslint-disable no-fallthrough */
import ClothesAPI from "../utils/api/ClothesAPI";

const ordersReducer = (orders, action) => {
  switch (action.type) {
    case "added": {
      // If currentUser, also update database
      console.log('add order');
      // console.log('action.payload.newOrder', action.payload.newOrder);
      if (action.payload.currentUser) {
        console.log('currentUser to update cart: ', action.payload.currentUser);
        ClothesAPI.addCartItem(action.payload.currentUser.email, action.payload.newOrder);
      };
      return [...orders, action.payload.newOrder];
    }
    case "deleted": {
      // userWriteOrder(
      //   auth.currentUser,
      //   orders.filter((order) => order.id !== action.id)
      // );
      
      return orders.filter((order) => order._id !== action.payload.id);
    }
    case "set": {
      // userWriteOrder(auth.currentUser, [...action.newOrders]);
      return [...action.payload.newOrders];
    }
    case "change quantity": {
      if (action.payload.quantity >= 1) {
        const ordersWithUpdatedQuantity = orders.filter((order) =>
          order._id === action.payload.id
            ? (order.quantity = action.payload.quantity)
            : order.quantity
        );
        // userWriteOrder(auth.currentUser, ordersWithUpdatedQuantity);
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
