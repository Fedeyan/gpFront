import {
  FETCH_ADMIN_ORDERS,
  FETCH_ALL_PRODUCTS,
  FETCH_CATEGORIES,
  FETCH_ORDERS,
  SET_ALERTS,
} from "./actions";

const initialState = {
  products: {
    all: [],
  },
  categories: [],
  order: [],
  adminOrders: [],
  alerts: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          all: payload,
        },
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case FETCH_ORDERS:
      return {
        ...state,
        order: payload,
      };
    case FETCH_ADMIN_ORDERS:
      return {
        ...state,
        adminOrders: payload,
      };
    case SET_ALERTS:
      return {
        ...state,
        alerts: payload,
      };
    default:
      return state;
  }
}
