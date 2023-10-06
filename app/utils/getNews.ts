import axios from 'axios';

const getNews = async (keyword: string) => {
  const response = await axios.get(`${process.env.URL}/everything?q=${keyword}&apiKey=${process.env.API_KEY}`);

  return response.data;
};

export default getNews;