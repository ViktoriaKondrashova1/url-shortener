import { HStack, Text } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import { FC, useState } from 'react';
import { LinksBlockProps } from 'types/types';
import './ShortenedLink.scss';

export const ShortenedLink: FC<LinksBlockProps> = link => {
  const [isButtonClicked, setisButtonClicked] = useState<boolean>(false);

  return (
    <HStack borderRadius='md' className='link-block' gap={10}>
      <Text className='original-link'>{link.originalLink}</Text>
      <HStack gap={8}>
        <Text className='shortened'>{link.shortenedLink}</Text>
        <AppButton text={isButtonClicked ? 'Copied!' : 'Copy'} onClick={() => {}} />
      </HStack>
    </HStack>
  );
};
