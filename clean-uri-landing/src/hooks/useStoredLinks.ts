import { useState, useEffect } from 'react';
import { LinksBlockProps } from '../types/types';
import {STORAGE_KEY} from "../constants/constants"

export const useStoredLinks = () => {
  const [links, setLinks] = useState<LinksBlockProps[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setLinks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  }, [links]);

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

  return { links, addLink, clearLinks };
};
