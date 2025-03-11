import { Container } from '@mantine/core';
import PodcastsGrid from '@/components/PodcastsGrid/PodcastsGrid';
import { TopIcons } from '@/components/TopIcons/TopIcons';
import { PodcastWelcome } from '@/components/Welcome/Welcome';

export function PodcastPage() {
  return (
    <>
      <TopIcons />
      <PodcastWelcome />
      <Container size="lg">
        <PodcastsGrid />
      </Container>
    </>
  );
}
