/* eslint-disable no-fallthrough */
// import { userWriteOrder } from "../FirebaseServices/firebaseDatabase";
// import { auth } from "../FirebaseServices/firebaseAuth";

const ordersReducer = (orders, action) => {
  switch (action.type) {
    case "added": {
      // userWriteOrder(auth.currentUser, [...orders, action.newOrder]);
      return [...orders, action.newOrder];
    }
    case "deleted": {
      // userWriteOrder(
      //   auth.currentUser,
      //   orders.filter((order) => order.id !== action.id)
      // );
      return orders.filter((order) => order.id !== action.id);
    }
    case "set": {
      // userWriteOrder(auth.currentUser, [...action.newOrders]);
      return [...action.newOrders];
    }
    case "change quantity": {
      if (action.payload.quantity >= 1) {
        const ordersWithUpdatedQuantity = orders.filter((order) =>
          order.id === action.payload.id
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
