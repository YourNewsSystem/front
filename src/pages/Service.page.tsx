// src/components/ServicePage/ServicePage.tsx

import React from 'react';
import { Container, Grid } from '@mantine/core';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import { TopWelcome } from '@/components/Welcome/Welcome';

interface ServicePageProps {
  title: string;
  fetchData: () => Promise<any>;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, fetchData }) => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]);

  return (
    <Container>
      <TopWelcome content={title} />
      {data ? (
        <Grid gutter="xs">
          {data.map((item: any) => (
            <>
              <Grid.Col span={4} key={item.id}>
                <ArticleCard
                  title={item.title}
                  id={item.id}
                  content={item.content}
                  link={item.link}
                  media={item.media[0].href}
                  origin={item.origin.title}
                  time={item.published}
                />
              </Grid.Col>
            </>
          ))}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ServicePage;
