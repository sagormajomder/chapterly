import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import SectionTitle from '../components/SectionTitle';
import Container from './../components/Container';
import { customAxios } from './../helpers/helpers';

export default function AllBookPage() {
  const books = useLoaderData().data;
  const [sortBy, setSortBy] = useState('');
  const [sortedBooks, setSortedBooks] = useState(books);

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  useEffect(
    function () {
      if (sortBy) {
        customAxios()
          .get(`/sort?sortby=${sortBy}`)
          .then(result => {
            setSortedBooks(result.data);
          });
      }
    },
    [sortBy]
  );

  return (
    <section className='py-14'>
      <Container>
        <SectionTitle
          title='Explore Books'
          desc='Browse every book , classic, and trending titles.'
        />
        <div className='text-right mb-2'>
          <select className='select' value={sortBy} onChange={handleSortBy}>
            <option value='' disabled={true}>
              Sort by rating
            </option>
            <option value='low'>Low-High</option>
            <option value='high'>High-Low</option>
          </select>
        </div>
        {/* Table */}
        {/* <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Book</th>
                <th>Author</th>
                <th>Rating</th>
                <th>Genre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedBooks.map((book, i) => (
                <Row key={book._id} book={book} index={i + 1} />
              ))}
            </tbody>
          </table>
        </div> */}

        {/* Table */}
        <div className='rounded-box border  border-gray-300 dark:border-gray-700 md:border-base-content/5 dark:md:border-base-content/5 bg-base-100'>
          {/* Desktop*/}
          <div className='hidden md:block overflow-x-auto'>
            <table className='table'>
              <thead>
                <tr>
                  <th></th>
                  <th>Book</th>
                  <th className='hidden sm:table-cell'>Author</th>
                  <th>Rating</th>
                  <th className='hidden lg:table-cell'>Genre</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sortedBooks.map((book, i) => (
                  <Row key={book._id} book={book} index={i + 1} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className='md:hidden p-4 space-y-3'>
            {sortedBooks.map((book, i) => (
              <div
                key={book._id}
                className='border dark:border-gray-700 border-gray-300 rounded-md p-4 flex flex-col sm:flex-row justify-between items-start gap-3'>
                <div>
                  <h4 className='font-semibold'>
                    {i + 1}. {book.title}
                  </h4>
                  <p className='text-sm text-muted'>{book.author}</p>
                  <div className='flex items-center gap-2 mt-2'>
                    <span className='text-yellow-300'>
                      <FaStar />
                    </span>
                    <span className='text-xs bg-primary text-white px-2 py-1 rounded-full'>
                      {book.rating}
                    </span>
                  </div>
                  <p className='mt-2 text-sm text-gray-600'>{book.genre}</p>
                </div>
                <Link
                  to={`/book-details/${book._id}`}
                  className='btn btn-primary self-start'>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Row({ book, index }) {
  const { _id, title, author, genre, rating } = book;
  return (
    <tr>
      <th>{index}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>
        <p className='text-xs bg-primary text-white  font-medium px-2 py-1 rounded-full max-w-fit mb-2 inline-flex gap-0.5'>
          <span className='text-yellow-300'>
            <FaStar />
          </span>{' '}
          {rating}
        </p>
      </td>
      <td>{genre}</td>
      <td>
        <Link to={`/book-details/${_id}`} className='btn btn-primary'>
          View Details
        </Link>
      </td>
    </tr>
  );
}
