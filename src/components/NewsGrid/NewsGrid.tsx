import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  Container,
  Divider,
  List,
  ScrollArea,
  SimpleGrid,
  Text,
  Tooltip,
} from '@mantine/core';

const NewsGrid = () => {
  const [feeds, setFeeds] = useState<{ url: string; data: any }[]>([]);
  interface NewsItem {
    source: string;
    id: string;
    feedid: number;
    crawlTimeMsec: string;
    timestampUsec: string;
    published: number;
    title: string;
    link: string;
    content: string;
    categories: Array<string>;
    origin: {
      title: string;
      htmlUrl: string;
      feedUrl: string;
    };
    media?: Array<{
      href: string;
      type: string;
      length: number;
    }>;
    read: number;
    favorite: number;
  }
  const urls = [
    'https://rss.kermaneno.ir/yournews/social/',
    'https://rss.kermaneno.ir/yournews/world/',
    'https://rss.kermaneno.ir/yournews/politic/',
    'https://rss.kermaneno.ir/yournews/sport/',
    'https://rss.kermaneno.ir/yournews/culture/',
    'https://rss.kermaneno.ir/yournews/economy/',
  ];

  useEffect(() => {
    const fetchFeeds = async () => {
      const results = await Promise.all(
        urls.map(async (url) => {
          try {
            const response = await axios.get(url);
            return { url, data: response.data };
          } catch (error) {
            console.error(`Error fetching feed from ${url}:`, error);
            return { url, data: 'Error loading feed' };
          }
        })
      );
      setFeeds(results);
    };

    fetchFeeds();
  }, []);

  return (
    <>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
          {feeds.map((feed, index) => (
            <div key={index}>
              <Text ta="left" size="lg" fw={900} tt="capitalize">{new URL(feed.url).pathname.split('/')[2]}</Text>
              <Card withBorder shadow="sm" radius="md">
                <ScrollArea h={250} scrollbarSize={8} offsetScrollbars scrollbars="y">
                  <List size="xs">
                    {feed.data.map((item: NewsItem, index: number) => (
                      <List.Item key={index}>
                        <Tooltip label={item.published}>
                          <Text size="sm" fw={700}>{item.title}</Text>
                        </Tooltip>
                        <Divider my="xs" label={item.origin.title+' | '+item.categories[1]} labelPosition="left" />
                      </List.Item>
                    ))}
                  </List>
                </ScrollArea>
              </Card>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default NewsGrid;
