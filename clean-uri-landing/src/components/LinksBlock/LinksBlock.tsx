import { LinksBlockProps } from 'types/types';
import { ShortenedLink } from '../ShortenedLink/ShortenedLink';
import { FC } from 'react';

interface Props {
  links: LinksBlockProps[];
}

export const LinksBlock: FC<Props> = ({links}) => {
  return links.map(el => (
    <ShortenedLink
      key={el.id}
      originalLink={el.originalLink}
      shortenedLink={el.shortenedLink}
    />
  ));
};
