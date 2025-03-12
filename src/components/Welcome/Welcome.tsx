import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        به
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {' '}
          خبرگزاری شخصی خودتان{' '}
        </Text>
        خوش آمدید.
      </Title>
    </>
  );
}

export function PodcastWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          پادکست‌های خبری
        </Text>
      </Title>
    </>
  );
}

export function NewsletterWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          گزارش‌های خبری
        </Text>
      </Title>
    </>
  );
}
