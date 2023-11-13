import { schemaNewsResponse } from '@/models/schemes';
import { NewsData, Selects, USER_MESSAGE } from '@/models/types';
import axios from 'axios';
import { z } from 'zod';
import objectToQueryString from './objectToQueryString';

const getNews = async (keyword: string, page: string = '1', params: Selects = {}): Promise<NewsData> => {
  try {
    const queryParamsString = objectToQueryString(params);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/everything?q=${keyword}${queryParamsString}&page=${page}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    const news = schemaNewsResponse.parse(response.data).articles.map((el, i) => ({ ...el, id: `${i + 1}` }));

    return { status: 'ok', totalResults: response.data.totalResults, message: USER_MESSAGE.success, data: news };
  } catch (e) {
    const result: NewsData = { status: 'error', message: USER_MESSAGE.smthWrong, data: [] };

    if (axios.isAxiosError(e)) {
      result.message = USER_MESSAGE.cantGet;
    }
    if (e instanceof z.ZodError) {
      result.message = USER_MESSAGE.wrongSchema;
    }

    return result;
  }
};

export default getNews;
