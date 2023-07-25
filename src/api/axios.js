import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;

export async function getAllProducts() {
  try {
    const response = await axios.get(`${API_URL}/products/get_all`);
    return response.data;
  } catch (error) {
    return error.data;
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(`${API_URL}/categories/get_all`);
    return response.data;
  } catch (error) {
    return error.data;
  }
}