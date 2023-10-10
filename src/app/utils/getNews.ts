import { schemaNewsResponse } from '@/models/schemes';
import axios from 'axios';

const getNews = async (keyword: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/everything?q=${keyword}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
  );

  return schemaNewsResponse.parse(response.data);
};

export default getNews;
