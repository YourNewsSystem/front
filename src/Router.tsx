import { createHashRouter, RouterProvider } from 'react-router-dom';
import Sport from './components/Service/Sport';
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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
