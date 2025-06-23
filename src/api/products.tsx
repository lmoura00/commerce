import { apiURL } from '@/apiUrl';
import axios from 'axios';
export async function fetchProducts () {
  try {
    if (!apiURL) {
      throw new Error('apiURL is not defined');
    }
    const response = await axios.get(apiURL);

    return response.data;

  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
export async function fetchProductWithId (id: string) {
  try {
    if (!apiURL) {
      throw new Error('apiURL is not defined');
    }
    const response = await axios.get(`${apiURL}/${id}`);

    return response.data;

  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
