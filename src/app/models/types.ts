import { z } from 'zod';
import { schemaNews, schemaNewsResponse } from './schemes';

export type News = z.infer<typeof schemaNews>;
export type NewsResponse = z.infer<typeof schemaNewsResponse>;

export interface NewsWithId extends News {
  id: string;
}

export const USER_MESSAGE = {
  success: 'Success!',
  smthWrong: 'Something went wrong...',
  cantGet: 'Oops! Can`t get news...',
  wrongSchema: 'Oops! Unexpected data...',
} as const;

type ObjectValues<T> = T[keyof T];

type UserMessage = ObjectValues<typeof USER_MESSAGE>;

export type NewsData = {
  status: 'ok' | 'error';
  message: UserMessage;
  data: NewsWithId[];
};

export type Selects = {
  sortBy?: 'publishedAt' | 'popularity';
  pageSize?: '3' | '6' | '9';
  language?: 'en' | 'ru' | 'fr' | 'de';
};
