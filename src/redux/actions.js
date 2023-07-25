export const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS"
export const FETCH_CATEGORIES = "FETCH_CATEGORIES"


export function fetchAllProducts(products) {
    return {
        type: FETCH_ALL_PRODUCTS,
        payload: products
    }
}

export function fetchCategories(categories) {
    return {
        type: FETCH_CATEGORIES,
        payload: categories
    }
}