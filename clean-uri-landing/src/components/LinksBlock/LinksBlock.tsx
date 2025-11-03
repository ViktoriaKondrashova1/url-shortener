import { ShortenedLink } from '../ShortenedLink/ShortenedLink';
import { useLinks } from '../../hooks/useLinks';

export const LinksBlock = () => {
  const { links } = useLinks();

  return (
    links &&
    links.map(el => (
      <ShortenedLink key={el.id} originalLink={el.originalLink} shortenedLink={el.shortenedLink} />
    ))
  );
};
