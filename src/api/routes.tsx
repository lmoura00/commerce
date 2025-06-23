import { apiURL } from '@/apiUrl';
import axios from 'axios';
const fetchProducts = async () => {
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

export default fetchProducts;