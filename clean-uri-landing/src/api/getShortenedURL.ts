import { API_URL } from '../constants/constants';

export const getShortenedURL = async (link: string): Promise<string> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      url: link,
    }),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  
  if (!result.result_url) {
    throw new Error('Failed to get shortened URL from response');
  }
  
  return result.result_url;
};
