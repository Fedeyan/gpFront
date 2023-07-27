export const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_ORDERS = "FETCH_ORDERS";

export function fetchAllProducts(products) {
  return {
    type: FETCH_ALL_PRODUCTS,
    payload: products,
  };
}

export function fetchCategories(categories) {
  return {
    type: FETCH_CATEGORIES,
    payload: categories,
  };
}

export function fetchOrder(order) {
  return {
    type: FETCH_ORDERS,
    payload: order,
  };
}
