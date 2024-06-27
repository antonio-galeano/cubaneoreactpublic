import Parser from 'rss-parser';
import { fetchOpenGraphImage } from './fetchOpenGraphImage';

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media:content'],
      ['media:thumbnail', 'media:thumbnail'],
      ['enclosure', 'enclosure']
    ]
  },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
});

const placeholderImage = '/placeholder.png';

const cleanSiteName = (url) => {
  const { hostname } = new URL(url);
  return hostname
    .replace(/^www\./, '')  
    .replace(/\.\w+$/, ''); 
};

const getImageUrl = async (item, siteName) => {
  if (siteName.includes('cibercuba')) {
    if (item.enclosure && item.enclosure.url) {
      return item.enclosure.url;
    }
  } else if (siteName.includes('14ymedio')) {
    if (item['media:content'] && item['media:content'].$.url) {
      return item['media:content'].$.url;
    }
    if (item['media:thumbnail'] && item['media:thumbnail'].$.url) {
      return item['media:thumbnail'].$.url;
    }
  }

  return await fetchOpenGraphImage(item.link);
};

export async function fetchRSSFeeds(urls) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const feedPromises = urls.map(async (url) => {
    try {
      const feed = await parser.parseURL(url);
      const siteName = cleanSiteName(url);
      const items = await Promise.all(feed.items
        .filter(item => {
          const pubDate = new Date(item.pubDate);
          const pubDateStartOfDay = new Date(pubDate);
          pubDateStartOfDay.setHours(0, 0, 0, 0);
          return pubDateStartOfDay.getTime() === today.getTime();
        })
        .map(async item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          image: await getImageUrl(item, siteName),
          siteName
        })));

      return items;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return [];
    }
  });

  const feeds = await Promise.all(feedPromises);
  return feeds.flat().sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}
