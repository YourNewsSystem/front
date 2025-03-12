import { Card, Center, Group, Text } from '@mantine/core';
import classes from './ArticleImageCard.module.css';

interface ArticleImageCardProps {
  id: string;
  title: string;
  content: string;
  link: string;
  media?: string;
  origin?: string;
  published?: Date | number;
  categories?: string;
}

// const function ArticleImageCard() {
//   const theme = useMantineTheme();

//   return (
const ArticleImageCard = ({
  title = 'تیتر',
  content = 'خبر',
  link = '#',
  media = 'https://placehold.co/180x100/ccc/F00?text=Your+News',
  origin = '',
  published = 0,
  categories = '',
}: ArticleImageCardProps) => {
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://mantine.dev/"
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
                {/* <IconEye size={16} stroke={1.5} color='dark' /> */}
                <Text size="sm" className={classes.bodyText}>
                  {categories}
                </Text>
              </Center>
              {/* <Center>
                <IconMessageCircle size={16} stroke={1.5} color='dark' />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text>
              </Center> */}
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
};

export default ArticleImageCard;
