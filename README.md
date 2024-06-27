# cubaneoreactpublic

This is a Next.js-based web application designed to gather and display news articles from various independent Cuban news sources. This aggregator simplifies access to a range of articles by pulling RSS feeds and displaying them in a user-friendly interface.

Features

- **Next.js Framework**: Leveraging the powerful Next.js framework for server-side rendering and optimized performance.
- **RSS Feed Aggregation**: Fetching news articles from multiple independent Cuban news sources.
- **Responsive Design**: A user-friendly interface that adapts to different screen sizes using Tailwind CSS.
- **Swiper Integration**: A vertical swiper component for easy navigation through articles on mobile devices.
- **Open Graph Image Fetching**: Fetches Open Graph images for articles when available, providing a rich visual experience.

Demo
A live demo of the application is hosted in Vercel: 
https://cubaneo-react.vercel.app
https://www.pulsocubano.com

Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/antonio-galeano/cubaneoreactpublic.git
   cd cubaneoreactpublic
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

Usage

Once the application is running, it will automatically fetch and display the latest news articles from the specified RSS feeds. You can navigate through the articles using the swiper on mobile devices or the grid layout on larger screens.


Technologies Used

- **[Next.js](https://nextjs.org/)**: Framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[RSS Parser](https://www.npmjs.com/package/rss-parser)**: Library for parsing RSS feeds.
- **[Swiper](https://swiperjs.com/)**: Mobile touch slider with hardware accelerated transitions.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for the browser and Node.js.
- **[Cheerio](https://cheerio.js.org/)**: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.


## License

This project is licensed under the MIT License. See the GNU GENERAL PUBLIC LICENSE.
