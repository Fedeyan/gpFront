import axios from "axios";
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

export async function login(username, password) {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      {
        username: String(username),
        password: String(password),
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
}

export async function isLogin() {
  try {
    const response = await axios.get(`${API_URL}/auth/isLogIn`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function logout() {
  try {
    const response = await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {}
}

export async function getOrder() {
  try {
    const response = await axios.get(`${API_URL}/orders/get`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addProduct(product, cant) {
  try {
    const response = await axios.post(
      `${API_URL}/orders/add`,
      {
        product: Number(product),
        cant: Number(cant),
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function checkIfAdmin() {
  try {
    const response = await axios.get(`${API_URL}/admin/check`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addCategorie(nombre) {
  try {
    const response = await axios.post(
      `${API_URL}/categories/add`,
      {
        nombre,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
}

export async function addProductList(
  nombre,
  code,
  marca,
  modelo,
  imagen,
  categoria,
  stock
) {
  try {
    const response = await axios.post(
      `${API_URL}/products/add`,
      {
        nombre,
        code,
        marca,
        modelo,
        imagen,
        categoria,
        stock,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function fetchAdminOrders() {
  try {
    const response = await axios.get(`${API_URL}/admin/getAllOrders`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function sendOrder() {
  try {
    const response = await axios.put(
      `${API_URL}/orders/ask`,
      {},
      { withCredentials: true }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getAlerts() {
  try {
    const response = await axios.get(`${API_URL}/alerts/get`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

