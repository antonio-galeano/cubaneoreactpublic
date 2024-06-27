import axios from 'axios';
import cheerio from 'cheerio';
import NodeCache from 'node-cache';

const ogImageCache = new NodeCache({ stdTTL: 3600 });
const placeholderImage = '/placeholder.png';

export async function fetchOpenGraphImage(url) {
  const cachedImage = ogImageCache.get(url);
  if (cachedImage) {
    return cachedImage;
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage) {
      ogImageCache.set(url, ogImage);
      return ogImage;
    }
  } catch (error) {
    console.error(`Error fetching Open Graph image from ${url}:`, error);
  }

  return placeholderImage;
}
