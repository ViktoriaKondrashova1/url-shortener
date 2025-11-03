import { FC, ReactNode, useEffect, useState } from 'react';
import { LinksBlockProps } from '../types/types';
import { STORAGE_KEY } from '../constants/constants';
import { LinksContext } from './LinksContext';

export const LinksProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [links, setLinks] = useState<LinksBlockProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const storedLinks = localStorage.getItem(STORAGE_KEY);
    if (storedLinks) {
      try {
        setLinks(JSON.parse(storedLinks));
      } catch (error) {
        console.error('Error parsing stored links:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
    }
  }, [links, isLoaded]);

  const addLink = (originalLink: string, shortenedLink: string) => {
    const newLink: LinksBlockProps = {
      id: Date.now(),
      originalLink,
      shortenedLink,
    };
    setLinks(prev => [newLink, ...prev]);
  };

  const clearLinks = () => {
    setLinks([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return <LinksContext.Provider value={{ links, addLink, clearLinks }}>{children}</LinksContext.Provider>;
};
