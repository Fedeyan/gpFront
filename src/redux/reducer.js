import { FETCH_ALL_PRODUCTS, FETCH_CATEGORIES } from "./actions";

const initialState = {
  products: {
    all: [],
  },
  categories: [],
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
    default:
      return state;
  }
}
