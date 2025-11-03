import { API_URL } from '../constants/constants';

export const getShortenedURL = async (link: string): Promise<string | undefined> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        url: link,
      }),
    });
    const result = await response.json();
    return result.result_url;
  } catch (err) {
    console.error(`Failed to shorten the link: ${err}`);
  }
};
