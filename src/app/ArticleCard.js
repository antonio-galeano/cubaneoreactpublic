import moment from 'moment-timezone';

export default function ArticleCard({ article }) {
  const { title, link, pubDate, image, siteName } = article;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${link}`;
  const placeholderImage = '/placeholder.png';

  const timeZone = 'America/New_York';

  const zonedDate = moment.tz(pubDate, timeZone);

  const formattedDate = zonedDate.format('DD/MM/YYYY');
  const formattedTime = zonedDate.format('HH:mm');

  return (
    <div className="bg-black md:rounded-lg overflow-hidden shadow-lg flex flex-col h-full w-full article-card">
      <div className="flex-shrink-0">
        <img 
          className="w-full h-48 object-cover sm:h-auto" 
          src={image || placeholderImage}
          alt={title} 
          style={{ width: '100%', height: '200px' }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow text-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex flex-col text-gray-600 mb-4 sm:flex-row sm:items-center">
          <div className="flex items-center mb-2 sm:mb-0">
            <img src={faviconUrl} style={{ height: '16px', width: '16px', marginRight: '5px' }} alt="Favicon" />
            <span className="mr-2">{siteName}</span>
          </div>
          <span>{formattedDate}, {formattedTime}</span>
        </div>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
}
