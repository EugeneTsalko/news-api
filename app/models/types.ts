import { z } from 'zod';
import { schemaNews, schemaNewsResponse } from './schemes';

export type News = z.infer<typeof schemaNews>;
export type NewsResponse = z.infer<typeof schemaNewsResponse>;
