import { Container, Grid, List } from '@mantine/core';
import NewsGrid from '@/components/NewsGrid/NewsGrid';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Container size="lg">
        <NewsGrid />
      </Container>
    </>
  );
}
