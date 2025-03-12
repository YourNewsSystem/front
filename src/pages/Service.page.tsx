// src/components/ServicePage/ServicePage.tsx

import React from 'react';
import { Container, Divider, Grid, Loader } from '@mantine/core';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import  ArticleImageCard from '@/components/ArticleCard/ArticleImageCard';
import { TopWelcome } from '@/components/Welcome/Welcome';
import { TopHeader } from '@/components/TopHeader/TopHeader';

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
    <><TopHeader /><Container>
      <TopWelcome content={title} />
      {/* <Grid gutter="xs">
      <Grid.Col span={3}>
        <ArticleImageCard title={''} id={''} content={''} link={''} media={''} origin={''} time={0} cat={''} />
      </Grid.Col>
      <Grid.Col span={3}>
        <ArticleImageCard title={''} id={''} content={''} link={''} media={''} origin={''} time={0} cat={''} />
      </Grid.Col>
      <Grid.Col span={3}>
        <ArticleImageCard title={''} id={''} content={''} link={''} media={''} origin={''} time={0} cat={''} />
      </Grid.Col>
      <Grid.Col span={3}>
        <ArticleImageCard title={''} id={''} content={''} link={''} media={''} origin={''} time={0} cat={''} />
      </Grid.Col>
    </Grid> */}
      {data ? (
        <Grid gutter="xs">
          {data.map((item: any) => (
            <>
              <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={item.id}>
                <ArticleImageCard
                  title={item.title}
                  id={item.id}
                  content={item.content}
                  link={item.link}
                  media={item.media[0].href}
                  origin={item.origin.title}
                  time={item.published}
                  cat={item.categories[1]} />
              </Grid.Col>
            </>
          ))}
        </Grid>
      ) : (
        <Loader color="red" size="sm" type="bars" />
      )}

      <Divider size='xl' mt='lg' mb='lg' />

      {data ? (
        <Grid gutter="xs">
          {data.map((item: any) => (
            <>
              <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={item.id}>
                <ArticleCard
                  title={item.title}
                  id={item.id}
                  content={item.content}
                  link={item.link}
                  media={item.media[0].href}
                  origin={item.origin.title}
                  time={item.published}
                  cat={item.categories[1]} />
              </Grid.Col>
            </>
          ))}
        </Grid>
      ) : (
        <Loader color="red" size="sm" type="bars" />
      )}
    </Container></>
  );
};

export default ServicePage;
