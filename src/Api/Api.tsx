import { useEffect, useState } from 'react';
import axios from 'axios';

// Constants
const NEWS_CATEGORIES = ['social', 'economy', 'sport', 'culture', 'world', 'politic'] as const;

// Type for category
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

// Service layer
export class NewsService {
  private static readonly NEWS_API = 'https://rss.kermaneno.ir/yournews';
  private static readonly DESCRIPTION_API = 'https://yn.j-ai.ir/newsletter/latest';

  async fetchCategoryData(category: NewsCategory): Promise<{
    items: Array<ServiceItem>;
    description: ServiceAI | null;
    error?: Error;
  }> {
    try {
      // Parallel API calls for better performance
      const [itemsResponse, descriptionResponse] = await Promise.all([
        axios.get(`${NewsService.NEWS_API}/${category}/`),
        axios.get(`${NewsService.DESCRIPTION_API}/${category}`),
      ]);

      const items = Array.isArray(itemsResponse.data)
        ? itemsResponse.data.map((item: ServiceItem) => ({
            ...item,
            id: Date.now().toString(), // Change this line
          }))
        : [];

      const description =
        typeof descriptionResponse.data === 'object' && descriptionResponse.data !== null
          ? { ...descriptionResponse.data, id: Date.now() }
          : null;

      const result = { items, description };

      return result;
    } catch (error) {
      console.error(`Error fetching data for category ${category}:`, error);
      throw new Error('Failed to fetch news data');
    }
  }
}
