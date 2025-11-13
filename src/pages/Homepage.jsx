import { useLoaderData } from 'react-router';
import About from '../components/homepage/About';
import BookOfTheWeek from '../components/homepage/BookOfTheWeek';
import HeroBanner from '../components/homepage/HeroBanner';
import LatestBooks from './../components/homepage/LatestBooks';
export default function Homepage() {
  const latestBooks = useLoaderData().data;
  return (
    <div className='space-y-14'>
      <HeroBanner />
      <LatestBooks latestBooks={latestBooks} />
      <BookOfTheWeek />
      <About />
    </div>
  );
}
