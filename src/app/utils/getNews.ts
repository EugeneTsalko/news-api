import { schemaNewsResponse } from '@/models/schemes';
import { NewsData, USER_MESSAGE } from '@/models/types';
import axios from 'axios';
import { z } from 'zod';
import objectToQueryString from './objectToQueryString';

const getNews = async (keyword: string, params: { [key: string]: string } = {}): Promise<NewsData> => {
  try {
    const queryParamsString = Object.keys(params).length ? objectToQueryString(params) : null;

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/everything?q=${keyword}${
        queryParamsString ? `&${queryParamsString}` : ''
      }&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    const news = schemaNewsResponse.parse(response.data).articles.map((el, i) => ({ ...el, id: `${i + 1}` }));

    return { status: 'ok', message: USER_MESSAGE.success, data: news };
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
