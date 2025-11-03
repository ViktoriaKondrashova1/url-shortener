import { createContext } from 'react';
import { LinksBlockProps } from '../types/types';

export interface LinksContextType {
  links: LinksBlockProps[];
  addLink: (originalLink: string, shortenedLink: string) => void;
  clearLinks: () => void
}

export const LinksContext = createContext<LinksContextType | undefined>(undefined);