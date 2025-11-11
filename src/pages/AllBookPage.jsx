import { FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import SectionTitle from '../components/SectionTitle';
import Container from './../components/Container';
export default function AllBookPage() {
  const books = useLoaderData().data;
  return (
    <section className='py-14'>
      <Container>
        <SectionTitle
          title='Explore Books'
          desc='Browse every book , classic, and trending titles.'
        />
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
              {books.map((book, i) => (
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
