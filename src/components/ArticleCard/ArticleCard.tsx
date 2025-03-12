import { IconClock, IconHeart, IconShare } from '@tabler/icons-react';
import { ActionIcon, Card, Center, Group, Image, ScrollArea, Text } from '@mantine/core';
import classes from './ArticleCard.module.css';

interface ArticleCardProps {
  message?: string;
  title: string;
  id: string;
  content: string;
  link: string;
  media: string;
  origin: string;
  time: number;
  cat: string;
}
const ArticleCard = ({
  title = 'تیتر',
  content = 'خبر',
  link = '#',
  media = '',
  origin = '',
  time = 0,
  cat = '',
}: ArticleCardProps) => {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={media}
            height={180}
            fallbackSrc="https://placehold.co/180x100/ccc/F00?text=Your+News"
          />
        </a>
      </Card.Section>
      <Text
        className={classes.title}
        fw={500}
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Text>
      <ScrollArea h={50} scrollbarSize={2} scrollHideDelay={0}>
        <Text fz="sm" c="dimmed" lineClamp={4}>
          {content}
        </Text>
      </ScrollArea>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Text fz="sm" fw="bolder" inline>
            {origin} | {cat}
          </Text>
        </Center>
        <ActionIcon.Group>
          <ActionIcon variant="default" size="xs" radius="md">
            <IconHeart size={16} color="red" />
          </ActionIcon>
          <ActionIcon.GroupSection
            variant="default"
            size="xs"
            bg="var(--mantine-color-body)"
            miw={60}
          >
            {time}
            <IconClock size={16} />
          </ActionIcon.GroupSection>
          <ActionIcon variant="default" size="xs" radius="md">
            <IconShare size={16} color="blue" />
          </ActionIcon>
        </ActionIcon.Group>
      </Group>
    </Card>
  );
};
export default ArticleCard;
