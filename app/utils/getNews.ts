import { schemaNewsResponse } from '@/models/schemes';
import { NewsResponse } from '@/models/types';
import axios from 'axios';

const getNews = async (keyword: string): Promise<NewsResponse> => {
  try {
    const response = await axios.get(`${process.env.URL}/everything?q=${keyword}&apiKey=${process.env.API_KEY}`);
    schemaNewsResponse.parse(response.data);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export default getNews;
