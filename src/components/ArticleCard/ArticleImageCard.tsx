import { IconMessageCircle } from '@tabler/icons-react';
import moment from 'moment-jalaali';
import { Card, Center, Group, Text } from '@mantine/core';
import ArticleCardProps from '../../types/ArticleCardProps';
import classes from './ArticleImageCard.module.css';

const ArticleImageCard = ({
  title = 'تیتر',
  content = 'خبر',
  link = '#',
  media = 'https://placehold.co/180x100/ccc/F00?text=Your\nNews&font=oswald',
  origin = '',
  crawlTimeMsec = '',
  categories = '',
}: ArticleCardProps) => {
  const convertTimestamp = (timestamp: string | undefined): number | null => {
    if (!timestamp) return null;
    const numValue = parseInt(timestamp);
    return isNaN(numValue) ? null : numValue;
  };
  const processedCrawlTime = convertTimestamp(crawlTimeMsec);
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://yournews.j-ai.ir/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${media})`,
        }}
      />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {title}
          </Text>
          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              {origin}
            </Text>
            <Group gap="lg">
              <Center>
                <Text size="sm" className={classes.bodyText}>
                  {categories}
                </Text>
              </Center>
              <Center>
                <IconMessageCircle size={16} stroke={1.5} color="dark" />
                <Text size="sm" className={classes.bodyText}>
                  {moment(processedCrawlTime).format('jYYYY/jM/jD')}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
};

export default ArticleImageCard;
