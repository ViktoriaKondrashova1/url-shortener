import { ShortenedLink } from '../ShortenedLink/ShortenedLink';
import { useLinks } from '../../hooks/useLinks';
import { Flex } from '@chakra-ui/react';
import { AppPagination } from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { ITEMS_PER_PAGE } from '../../constants/constants';
import './LinksBlock.scss';

export const LinksBlock = () => {
  const { links } = useLinks();
  const [page, setPage] = useState<number>(1);

  const startRange = (page - 1) * ITEMS_PER_PAGE;
  const endRange = startRange + ITEMS_PER_PAGE;

  const visibleItems = links.slice(startRange, endRange);

  useEffect(() => {
    setPage(1);
  }, [links.length]);

  if (!links || links.length === 0) {
    return null;
  }

  return (
    <>
      <Flex direction='column' gap='8px' className='links-block'>
        {visibleItems.map(el => (
          <ShortenedLink
            key={el.id}
            originalLink={el.originalLink}
            shortenedLink={el.shortenedLink}
          />
        ))}
      </Flex>
      {links.length > ITEMS_PER_PAGE && (
        <AppPagination count={links.length} page={page} onPageChange={setPage} />
      )}
    </>
  );
};
