import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        به
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        {' '}خبرگزاری شخصی خودتان{' '}
        </Text>
        خوش آمدید.
      </Title>
    </>
  );
}
