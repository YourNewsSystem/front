import { Container } from '@mantine/core';
import NewsGrid from '@/components/NewsGrid/NewsGrid';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <TopHeader />
      <Welcome />
      <Container size="lg">
        <NewsGrid />
      </Container>
    </>
  );
}
