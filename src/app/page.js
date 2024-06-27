import { fetchRSSFeeds } from '../lib/fetchRSS';
import dynamic from 'next/dynamic';
import ArticleCard from './ArticleCard';

const ClientSwiper = dynamic(() => import('./ClientSwiper'), { ssr: false });

export const revalidate = 900;

export default async function Home() {
  const rssUrls = [
    'https://diariodecuba.com/rss.xml',
    'https://www.cibercuba.com/rss.xml',
    'https://adncuba.com/rss.xml',
    'https://www.14ymedio.com/rss',
    'https://eltoque.com/api/feed',
  ];

  const feeds = await fetchRSSFeeds(rssUrls);

  return (
    <div className="container mx-auto p-0 lg:p-4">
      <a href="/" className="text-3xl font-bold text-center my-4 block">
        Pulso Cubano
      </a>
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {feeds.map((feed, index) => (
          <div key={index} className="h-full">
            <ArticleCard article={feed} />
          </div>
        ))}
      </div>
      <div className="lg:hidden h-full">
        <ClientSwiper feeds={feeds} />
      </div>
    </div>
  );
}
