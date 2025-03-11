import { Container } from '@mantine/core';
import NewslettersGrid from '@/components/NewslettersGrid/NewslettersGrid';
import { TopIcons } from '@/components/TopIcons/TopIcons';
import { NewsletterWelcome } from '@/components/Welcome/Welcome';

export function NewsletterPage() {
  return (
    <>
      <TopIcons />
      <NewsletterWelcome />
      <Container size="lg">
        <NewslettersGrid />
      </Container>
    </>
  );
}
