import { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { customAxios } from '../../helpers/helpers';
import SectionTitle from '../SectionTitle';
import Container from './../Container';

const latestBooksPromise = customAxios().get('/latest-books');

export default function LatestBooks() {
  const latestBooks = use(latestBooksPromise).data;

  return (
    <section className='py-14'>
      <Container>
        <SectionTitle
          title='Explore Latest Books'
          desc='Browse the newest stories shaping readers’ shelves and imaginations'
        />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-5 mb-6'>
          {latestBooks.map(book => (
            <Book key={book._id} book={book} />
          ))}
        </div>
        <div className='w-full text-center'>
          <Link to='/all-books' className='btn btn-primary'>
            Explore More
          </Link>
        </div>
      </Container>
    </section>
  );
}

function Book({ book }) {
  const { _id, title, author, genre, rating, coverImage } = book;
  return (
    <div className='p-6 pb-0 bg-red-50 flex flex-col items-center justify-between gap-5 min-[75rem]:h-102.5 overflow-hidden group rounded-md'>
      <figure>
        <img className='h-62.5' src={coverImage} alt={title} />
      </figure>
      <div className='self-start w-full  bg-red-50 py-5 min-[75rem]:group-hover:-translate-y-18 transition duration-300'>
        <div className='flex justify-between'>
          <p className='text-xs bg-accent px-2 py-1 rounded-full max-w-fit mb-2'>
            {genre.toUpperCase()}
          </p>
          <p className='text-xs bg-primary text-white font-medium px-2 py-1 rounded-full max-w-fit mb-2 inline-flex gap-0.5'>
            <span className='text-yellow-300'>
              <FaStar />
            </span>{' '}
            {rating}
          </p>
        </div>
        <h4 className='heading-4'>{title}</h4>
        <p className='text-sm text-gray-500 mb-5'>By {author}</p>
        <Link className='btn btn-primary w-full' to={`book-details/${_id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}
