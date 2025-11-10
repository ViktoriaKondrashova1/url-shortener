import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { ITEMS_PER_PAGE } from '../../constants/constants';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { FC } from 'react';

interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
}

export const AppPagination: FC<Props> = ({ count, page, onPageChange }) => {
  return (
    <Pagination.Root
      count={count}
      pageSize={ITEMS_PER_PAGE}
      defaultPage={1}
      page={page}
      onPageChange={e => onPageChange(e.page)}
    >
      <ButtonGroup variant='outline' size='sm'>
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>
        <Pagination.Items
          render={page => (
            <IconButton
              variant={{ base: 'ghost', _selected: 'solid' }}
              aria-label={`Go to page ${page.value}`}
            >
              {page.value}
            </IconButton>
          )}
        />
        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};
