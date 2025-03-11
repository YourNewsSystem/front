import React, { useEffect, useState } from 'react';
import { IconBlockquote, IconBuildingBroadcastTower, IconInfoCircle } from '@tabler/icons-react';
import axios from 'axios';
import Markdown from 'react-markdown';
import {
  Blockquote,
  Card,
  Container,
  Divider,
  List,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Text,
  Tooltip,
} from '@mantine/core';

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

const NewsGrid = () => {
  const [feeds, setFeeds] = useState<
    {
      mainUrl: string;
      mainData: any;
      newsletterUrl: string;
      newsletterData: any;
    }[]
  >([]);

  const urls = [
    'https://rss.kermaneno.ir/yournews/social/',
    'https://rss.kermaneno.ir/yournews/world/',
    'https://rss.kermaneno.ir/yournews/politic/',
    'https://rss.kermaneno.ir/yournews/sport/',
    'https://rss.kermaneno.ir/yournews/culture/',
    'https://rss.kermaneno.ir/yournews/economy/',
  ];

  const newsletterUrls = [
    'https://yn.j-ai.ir/newsletter/latest/social',
    'https://yn.j-ai.ir/newsletter/latest/world',
    'https://yn.j-ai.ir/newsletter/latest/politic',
    'https://yn.j-ai.ir/newsletter/latest/sport',
    'https://yn.j-ai.ir/newsletter/latest/culture',
    'https://yn.j-ai.ir/newsletter/latest/economy',
  ];

  useEffect(() => {
    const fetchAllFeeds = async () => {
      const results = await Promise.all(
        urls.map(async (mainUrl, index) => {
          try {
            const [mainResponse, newsletterResponse] = await Promise.all([
              axios.get(mainUrl),
              axios.get(newsletterUrls[index]),
            ]);
            return {
              mainUrl,
              mainData: mainResponse.data,
              newsletterUrl: newsletterUrls[index],
              newsletterData: newsletterResponse.data,
            };
          } catch (error) {
            console.error(`Error fetching feeds for ${mainUrl}:`, error);
            return {
              mainUrl,
              mainData: 'Error loading feed',
              newsletterUrl: newsletterUrls[index],
              newsletterData: 'Error loading newsletter',
            };
          }
        })
      );
      setFeeds(results);
    };

    fetchAllFeeds();
  }, []);
  const summary_icon = <IconBlockquote stroke={1} />;
  const podcast_icon = <IconBuildingBroadcastTower stroke={1} />;

  return (
    // <Container size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="sm" verticalSpacing="xl">
        {feeds.map((feed, index) => (
          <div key={index}>
            <Text ta="left" size="lg" fw={900} tt="capitalize">
              {new URL(feed.mainUrl).pathname.split('/')[2]}
            </Text>

            {/* Newsletter Section */}
            <Blockquote
              color="red"
              radius="xl"
              iconSize={30}
              cite="تحلیل"
              icon={summary_icon}
              mt="xs"
              p="xs"
            >
              <ScrollArea h={150} scrollbarSize={8} scrollbars="y">
                <Markdown>{feed.newsletterData.body}</Markdown>
              </ScrollArea>
              <time>{new Date(feed.newsletterData.created_at).toLocaleDateString()}</time>
            </Blockquote>

            <Blockquote color="blue" cite="پادکست" icon={podcast_icon} mt="xs" p="xs">
              <ScrollArea h={150} scrollbarSize={8} scrollbars="y">
                <Markdown>{feed.newsletterData.podcast}</Markdown>
              </ScrollArea>
              <time>{new Date(feed.newsletterData.updated_at).toLocaleDateString()}</time>
            </Blockquote>

            {/* Main Feed Section */}

            {/* <Card withBorder shadow="sm" radius="md"> */}
            <ScrollArea h={250} scrollbarSize={8} offsetScrollbars scrollbars="y">
              <List size="xs">
                {typeof feed.mainData === 'string' ? (
                  <Text>{feed.mainData}</Text>
                ) : (
                  feed.mainData.map((item: NewsItem, index: number) => (
                    <List.Item key={index}>
                      <Tooltip label={item.published}>
                        <Text size="sm" fw={700}>
                          {item.title}
                        </Text>
                      </Tooltip>
                      <Divider
                        my="xs"
                        label={item.origin.title + ' | ' + item.categories[1]}
                        labelPosition="left"
                      />
                    </List.Item>
                  ))
                )}
              </List>
            </ScrollArea>
            {/* </Card> */}
          </div>
        ))}
      </SimpleGrid>
    // </Container>
  );
};

export default NewsGrid;
