import { schemaNewsResponse } from '@/models/schemes';
import { NewsResponse, NewsWithId } from '@/models/types';
import axios from 'axios';

const getNews = async (keyword: string) => {
  const response = await axios.get<NewsResponse>(
    `${process.env.NEXT_PUBLIC_URL}/everything?q=${keyword}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
  );

  const newsWithId = schemaNewsResponse
    .parse(response.data)
    .articles.map((el, i) => ({ ...el, id: `${i + 1}` })) as NewsWithId[];

  return newsWithId;
};

export default getNews;
