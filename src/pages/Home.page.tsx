import { IconBrandGithub, IconBrandTelegram, IconHeart } from '@tabler/icons-react';
import { ActionIcon, Button, Container, Flex, Grid, List } from '@mantine/core';
import NewsGrid from '@/components/NewsGrid/NewsGrid';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap" m="lg">
        <ActionIcon
          variant="gradient"
          size="xl"
          aria-label="Telegram"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          <IconBrandTelegram stroke={1} />
        </ActionIcon>
        <ActionIcon
          variant="gradient"
          size="xl"
          aria-label="Bale"
          gradient={{ from: 'blue', to: 'cyan', deg: 180 }}
        >
          <IconHeart />
        </ActionIcon>
        <ActionIcon
          variant="gradient"
          size="xl"
          aria-label="Github"
          gradient={{ from: 'blue', to: 'cyan', deg: 270 }}
        >
          <IconBrandGithub stroke={1} />
        </ActionIcon>
      </Flex>
      <Welcome />
      <Container size="lg">
        <NewsGrid />
      </Container>
    </>
  );
}
