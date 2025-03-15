import { IconBrandGithub, IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconBrandYoutube, IconTicket } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Text } from '@mantine/core';
import classes from './Footer.module.css';

const data = [
  {
    title: 'درباره',
    links: [
      { label: 'امکانات', link: '#' },
      { label: 'فرآیند', link: '#' },
      { label: 'هزینه‌ها', link: '#' },
    ],
  },
  {
    title: 'پروژه',
    links: [
      { label: 'منابع', link: '#' },
      { label: 'سرویس‌ها', link: '#' },
      { label: 'حامیان', link: '#' },      
    ],
  },
  {
    title: 'خدمات',
    links: [
      { label: 'تحت وب', link: '#' },
      { label: 'بازو در بله', link: '#' },
      { label: 'روبات در تلگرام', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          <Image src={'https://raw.githubusercontent.com/YourNewsSystem/front/refs/heads/master/src/android-chrome-192x192.png'}></Image>
          <Text size="xs" c="dimmed" className={classes.description}>
          اینجا شما فقط مخاطب اخبار نیستید، اخبار برای شما آماده می‌شوند
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 JAI. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTelegram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconTicket size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}