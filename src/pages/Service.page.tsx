// src/components/ServicePage/ServicePage.tsx
import React from 'react';
import { Container, Divider, Grid, Loader } from '@mantine/core';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import ArticleImageCard from '@/components/ArticleCard/ArticleImageCard';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { TopWelcome } from '@/components/Welcome/Welcome';

interface ServiceItem {
  id: string;
  title: string;
  content: string;
  link: string;
  media?: Array<{ href: string }>;
  origin?: { title: string };
  published?: Date | number;
  categories?: Array<string>;
}

interface ServicePageProps {
  title: string;
  fetchData: () => Promise<Array<ServiceItem>>;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, fetchData }) => {
  const [data, setData] = React.useState<Array<ServiceItem>>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchData]);

  if (loading) return <Loader color="red" size="sm" type="bars" />;
  if (error) return <div className="text-red-500">{error}</div>;

  const getCategory = (categories: Array<string> | undefined): string => {
    return categories?.[1] ?? 'Uncategorized';
  };

  return (
    <>
      <TopHeader />
      <Container fluid>
        <TopWelcome content={title} />

        {data.length === 0 && <div>No articles found</div>}
        <Grid>
          {data.slice(0, 2).map((item) => (
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }} key={item.id}>
              <ArticleImageCard
                title={item.title}
                id={item.id}
                content={item.content}
                link={item.link}
                media={item.media?.[0]?.href}
                origin={item.origin?.title}
                published={item.published}
                categories={getCategory(item.categories)}
              />
            </Grid.Col>
          ))}
          {data.slice(3, 7).map((item) => (
            <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={item.id}>
              <ArticleImageCard
                title={item.title}
                id={item.id}
                content={item.content}
                link={item.link}
                media={item.media?.[0]?.href}
                origin={item.origin?.title}
                published={item.published}
                categories={getCategory(item.categories)}
              />
            </Grid.Col>
          ))}

          <Divider size="xl" mt="lg" mb="lg" />

          {data.slice(8).map((item) => (
            <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={`card-${item.id}`}>
              <ArticleCard
                title={item.title}
                id={item.id}
                content={item.content}
                link={item.link}
                media={item.media?.[0]?.href}
                origin={item.origin?.title}
                published={item.published}
                categories={getCategory(item.categories)}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ServicePage;
