import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import SectionTitle from '../components/SectionTitle';
import Container from './../components/Container';
import Loader from './../components/Loader';
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
        <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
          <table className='table'>
            {/* head */}
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
