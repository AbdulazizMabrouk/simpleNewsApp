import {client} from '../Api/client';

export const getAllNews = async () => {
  let allNews = await client.get(
    'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2021-11-12&' +
      'sortBy=popularity&' +
      'apiKey=3078583105fd4667b42f54385e4375ac',
  );

  return allNews;
};
