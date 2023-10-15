import { schemaNewsResponse } from '@/models/schemes';
import { NewsResponse, NewsWithId } from '@/models/types';
import axios from 'axios';
import { z } from 'zod';

const getNews = async (keyword: string) => {
  try {
    const response = await axios.get<NewsResponse>(
      `${process.env.NEXT_PUBLIC_URL}/everything?q=${keyword}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    const newsWithId = schemaNewsResponse
      .parse(response.data)
      .articles.map((el, i) => ({ ...el, id: `${i + 1}` })) as NewsWithId[];

    return { status: 'ok', message: 'Success!', data: newsWithId };
  } catch (e) {
    let message = 'Something went wrong...';

    if (axios.isAxiosError(e)) {
      message = 'Oops! Can`t get news...';
    }
    if (e instanceof z.ZodError) {
      message = 'Oops! News schema is wrong...';
    }

    return { status: 'error', message, data: [] };
  }
};

export default getNews;
