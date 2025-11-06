import { ShortenedLink } from '../ShortenedLink/ShortenedLink';
import { useLinks } from '../../hooks/useLinks';
import { Flex } from '@chakra-ui/react';
import "./LinksBlock.scss"

export const LinksBlock = () => {
  const { links } = useLinks();

  if (!links || links.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" gap="8px" className='links-block'>
      {links.map(el => (
        <ShortenedLink
          key={el.id}
          originalLink={el.originalLink}
          shortenedLink={el.shortenedLink}
        />
      ))}
    </Flex>
  );
};
