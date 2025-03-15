import { useEffect, useState } from 'react';
import { NewsCategory, NewsService } from '@/Api/Api';

// Hook implementation
export function useNews(category: NewsCategory) {
  const [data, setData] = useState<{
    items: Array<ServiceItem>;
    description: ServiceAI | null;
    error?: Error;
  }>({ items: [], description: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newsService = new NewsService();
        const result = await newsService.fetchCategoryData(category);
        setData(result);
      } catch (error) {
        // catch (error) {
        //   setData((prev) => ({ ...prev, error }));
        // } finally {
        //   setLoading(false);
        // }

        setData((prev) => ({
          ...prev,
          error: error instanceof Error ? error : new Error('An error occurred'),
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { data, loading, error: data.error };
}
