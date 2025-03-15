import { Container } from '@mantine/core';
import NewsGrid from '@/components/NewsGrid/NewsGrid';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { Welcome } from '../components/Welcome/Welcome';
import { Footer } from '@/components/Footer/Footer';

export function LandingPage() {
  return (
    <>
      <TopHeader />
      <Welcome />
      <Container size="lg">
        <NewsGrid />
      </Container>
      <Footer/>
    </>
  );
}
