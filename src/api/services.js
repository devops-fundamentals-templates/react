import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
}

export async function deleteProduct(id) {
  await axios.delete(`${BASE_URL}/products/${id}`);
}

export async function addProduct(title, price) {
  await axios.post(`${BASE_URL}/products`, {
    title: title,
    price: price,
  });
}
