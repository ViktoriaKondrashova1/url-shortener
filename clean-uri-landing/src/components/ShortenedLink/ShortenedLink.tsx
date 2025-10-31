import { HStack, Text } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import { FC, useState } from 'react';
import { LinksBlockProps } from 'types/types';
import './ShortenedLink.scss';

export const ShortenedLink: FC<LinksBlockProps> = link => {
  const { originalLink, shortenedLink } = link;
  const [isButtonClicked, setisButtonClicked] = useState<boolean>(false);

  const handleCopyClick = async (link: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(link);
      setisButtonClicked(true);
      setTimeout(() => setisButtonClicked(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <HStack borderRadius='md' className='link-block' gap={10}>
      <Text className='original-link'>{originalLink}</Text>
      <HStack gap={8}>
        <Text className='shortened'>{shortenedLink}</Text>
        <AppButton
          text={isButtonClicked ? 'Copied!' : 'Copy'}
          disabled={isButtonClicked}
          onClick={() => handleCopyClick(shortenedLink)}
        />
      </HStack>
    </HStack>
  );
};
