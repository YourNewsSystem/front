import Markdown from 'react-markdown';
import { Box, Container, Grid, List, Paper, SimpleGrid, Skeleton } from '@mantine/core';
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

  function NewsList({ category }: { category: NewsCategory }) {
    const { data, loading, error } = useNews(category);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading news</div>;

    return (
      <List>
        {data.items.map((item) => (
          <List.Item key={item.id}>{item.title}</List.Item>
        ))}
      </List>
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
      <Container fluid p={'sm'}>
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 12, sm: 2 }} spacing="md">
            <Paper shadow="xs" radius="xs" withBorder p="xl">
              <TopWelcome content="سیاست" />
              <NewsDesc category="politic" />
            </Paper>
            <Grid gutter="md">
              <Grid.Col>
                <NewsList category="politic" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Paper>
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
              <NewsList category="culture" />
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
              <NewsList category="sport" />
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
              <NewsList category="social" />
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
              <NewsList category="economy" />
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
              <NewsList category="world" />
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
