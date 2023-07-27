import { FETCH_ALL_PRODUCTS, FETCH_CATEGORIES, FETCH_ORDERS } from "./actions";

const initialState = {
  products: {
    all: [],
  },
  categories: [],
  order: [],
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
    default:
      return state;
  }
}
