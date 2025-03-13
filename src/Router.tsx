import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Culture, Economy, Politic, Sport, World } from './components/Service/Service';
import { HomePage } from './pages/Home.page';
import { NewsletterPage } from './pages/Newsletter.page';
import { PodcastPage } from './pages/Podcast.page';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/podcasts',
    element: <PodcastPage />,
  },
  {
    path: '/newsletters',
    element: <NewsletterPage />,
  },
  {
    path: '/service/sport',
    element: <Sport />,
  },
  {
    path: '/service/politic',
    element: <Politic />,
  },
  {
    path: '/service/world',
    element: <World />,
  },
  {
    path: '/service/culture',
    element: <Culture />,
  },
  {
    path: '/service/ثconomy',
    element: <Economy />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
