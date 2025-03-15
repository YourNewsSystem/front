import Markdown from 'react-markdown';
import { Box, Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import { NewsCategory } from '@/Api/Api';
import { Footer } from '@/components/Footer/Footer';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { TopWelcome } from '@/components/Welcome/Welcome';
import { useNews } from '@/Hooks/UseNews';

const PRIMARY_COL_HEIGHT = '300px';

export function LandingPage() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const STACK_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} * 3 + var(--mantine-spacing-md) * 3)`;

  function NewsPage({ category }: { category: NewsCategory }) {
    const { data, loading, error } = useNews(category);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading news</div>;

    return (
      <div>
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
        <div className="news-items">
          {data.items.map((item) => (
            <article key={item.id}>{item.title}</article>
          ))}
        </div>
        {data.description && <section className="description">{data.description.podcast}</section>}
      </div>
    );
  }

  function NewsDesc({ category }: { category: NewsCategory }) {
    const { data, loading, error } = useNews(category);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading news</div>;

    return <Markdown>{data.description?.body}</Markdown>;
  }

  return (
    <>
      <TopHeader />
      <Container fluid>
        <SimpleGrid cols={{ base: 12, sm: 2 }} spacing="md">
          <Box>
            <TopWelcome content="سیاست" />
            <NewsDesc category="politic" />
          </Box>
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>

      <Container fluid mt={'md'}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Grid gutter="md">
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
          <Box>
            <TopWelcome content="فرهنگ" />
            <NewsDesc category="culture" />
          </Box>
        </SimpleGrid>
      </Container>

      <Container fluid mt={'md'}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Box>
            <TopWelcome content="ورزش" />
            <NewsDesc category="sport" />
          </Box>
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>

      <Container fluid mt={'md'}>
        <SimpleGrid cols={{ base: 12, sm: 2 }} spacing="md">
          <Box>
            <TopWelcome content="جامعه" />
            <NewsDesc category="social" />
          </Box>
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>

      <Container fluid mt={'md'}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Grid gutter="md">
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
          <Box>
            <TopWelcome content="اقتصاد" />
            <NewsDesc category="economy" />
          </Box>
        </SimpleGrid>
      </Container>

      <Container fluid mt={'md'}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Box>
            <TopWelcome content="جهان" />
            <NewsDesc category="world" />
          </Box>
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
