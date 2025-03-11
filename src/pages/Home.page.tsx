import { Container } from '@mantine/core';
import NewsGrid from '@/components/NewsGrid/NewsGrid';
import { TopIcons } from '@/components/TopIcons/TopIcons';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <TopIcons />
      <Welcome />
      <Container size="lg">
        <NewsGrid />
      </Container>
    </>
  );
}
