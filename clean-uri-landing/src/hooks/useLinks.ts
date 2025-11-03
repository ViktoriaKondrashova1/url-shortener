import { useContext } from 'react';
import { LinksContext } from '../context/LinksContext';

export const useLinks = () => {
  const context = useContext(LinksContext);
  if (context === undefined) {
    throw new Error('useLinks must be used within a LinksProvider');
  }
  return context;
};